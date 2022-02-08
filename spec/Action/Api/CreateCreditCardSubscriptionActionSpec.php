<?php
/*
    This file was created by developers working at BitBag
    Do you need more information about us and what we do? Visit our   website!
    We are hiring developers from all over the world. Join us and start your new, exciting adventure and become part of us: https://bitbag.io/career
*/
declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Action\Api;

use BitBag\SyliusMolliePlugin\Action\Api\BaseApiAwareAction;
use BitBag\SyliusMolliePlugin\Action\Api\CreateCreditCardSubscriptionAction;
use BitBag\SyliusMolliePlugin\Client\MollieApiClient;
use BitBag\SyliusMolliePlugin\Logger\MollieLoggerActionInterface;
use BitBag\SyliusMolliePlugin\Parser\Response\GuzzleNegativeResponseParserInterface;
use BitBag\SyliusMolliePlugin\Payments\Methods\CreditCard;
use BitBag\SyliusMolliePlugin\Request\Api\CreateSepaMandate;
use Mollie\Api\Endpoints\PaymentEndpoint;
use Payum\Core\Action\ActionInterface;
use Payum\Core\ApiAwareInterface;
use Payum\Core\GatewayAwareInterface;
use Payum\Core\Model\BankAccountInterface;
use Payum\Core\Model\CreditCardInterface;
use Payum\Core\Model\Payment;
use Payum\Core\Reply\HttpRedirect;
use PhpSpec\ObjectBehavior;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

final class CreateCreditCardSubscriptionActionSpec extends ObjectBehavior
{
    function let(
        SessionInterface $session,
        MollieLoggerActionInterface $loggerAction,
        GuzzleNegativeResponseParserInterface $guzzleNegativeResponseParser
    )
    {
        $this->beConstructedWith(
            $session,
            $loggerAction,
            $guzzleNegativeResponseParser
        );
    }

    function it_is_initializable()
    {
        $this->shouldHaveType(CreateCreditCardSubscriptionAction::class);
    }

    function it_should_extends()
    {
        $this->shouldBeAnInstanceOf(BaseApiAwareAction::class);
    }

    function it_should_implements_gateway_aware_interface()
    {
        $this->shouldImplement(GatewayAwareInterface::class);
    }

    function it_should_implements_api_aware_interface()
    {
        $this->shouldImplement(ApiAwareInterface::class);
    }

    function it_should_implements_action_interface()
    {
        $this->shouldImplement(ActionInterface::class);
    }

    function it_executes(
        MollieApiClient $mollieApiClient,
        CreateSepaMandate $request,
        PaymentEndpoint $paymentsEndpoint,
        Payment $payment,
        BankAccountInterface $bankAccount,
        CreditCardInterface $creditCard,
        \Mollie\Api\Resources\Payment $apiPayment
    )
    {
        $this->setApi($mollieApiClient);

        $bankAccount->setNumber(456-789);
        $bankAccount->setBankCode('test_code');
        $bankAccount->setBankCountryCode('PL');
        $bankAccount->setBic('test_bic');
        $bankAccount->setHolder('test_holder');
        $bankAccount->setIban('test_iban');

        $creditCard->setHolder('Jan Kowalski');
        $creditCard->setNumber(123456789);
        $creditCard->setBrand('test_brand');
        $creditCard->setExpireAt(2099-12-12);
        $creditCard->setSecurityCode(6666);

        $payment->setNumber(123);
        $payment->setBankAccount($bankAccount);
        $payment->setClientEmail('test@email.io');
        $payment->setClientId(1);
        $payment->setCreditCard($creditCard);
        $payment->setCurrencyCode('PLN');
        $payment->setTotalAmount(420);


        $details = new \ArrayObject($request->getModel());

//        $details = ['metadata'=> [
//            'molliePaymentMethods'=> 'method',
//            'selected_issuer',
//            'cartToken' => 'cart_token',
//            ],
//            'amount' => 1,
//            'customerId' => 5,
//            'description' => 'test_description',
//            'backurl' => 'test_url',
//            'webhookUrl' => 'webhook_url',
//        ];
        $details->offsetSet(
            'metadata', [
                'molliePaymentMethods'=> 'method',
                'selected_issuer',
                'cartToken' => 'cart_token',
            ]
        );
        $details->offsetSet('amount', 1);
        $details->offsetSet('customerId', 5);
        $details->offsetSet('description', 'test_description');
        $details->offsetSet('backurl', 'test_url');
        $details->offsetSet('webhookUrl', 'webhook_url');

        $paymentsEndpoint->create([
            'method' => $details['metadata']['molliePaymentMethods'] ?: '',
            'issuer' => $details['metadata']['selected_issuer'] ?? null,
            'cardToken' => $details['metadata']['cartToken'],
            'amount' => $details['amount'],
            'customerId' => $details['customerId'] ?? null,
            'description' => $details['description'],
            'redirectUrl' => $details['backurl'],
            'webhookUrl' => $details['webhookUrl'],
            'metadata' => $details['metadata'],
            'sequenceType' => 'first',
        ])->willReturn($apiPayment);
        $mollieApiClient->payments = $paymentsEndpoint;


        $apiPayment->getCheckoutUrl()->willReturn('test_checkout_url');



        $this->execute($request);
    }
}
