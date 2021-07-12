<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Action;

use BitBag\SyliusMolliePlugin\Action\Api\BaseApiAwareAction;
use BitBag\SyliusMolliePlugin\Helper\ConvertRefundDataInterface;
use BitBag\SyliusMolliePlugin\Logger\MollieLoggerActionInterface;
use Mollie\Api\Exceptions\ApiException;
use Payum\Core\Action\ActionInterface;
use Payum\Core\ApiAwareInterface;
use Payum\Core\Bridge\Spl\ArrayObject;
use Payum\Core\Exception\RequestNotSupportedException;
use Payum\Core\GatewayAwareInterface;
use Payum\Core\GatewayAwareTrait;
use Payum\Core\Request\Refund;
use Sylius\Component\Core\Model\PaymentInterface;
use Sylius\Component\Resource\Exception\UpdateHandlingException;

final class RefundAction extends BaseApiAwareAction implements ActionInterface, ApiAwareInterface, GatewayAwareInterface
{
    use GatewayAwareTrait;

    /** @var MollieLoggerActionInterface */
    private $loggerAction;

    /** @var ConvertRefundDataInterface */
    private $convertOrderRefundData;

    public function __construct(
        MollieLoggerActionInterface $loggerAction,
        ConvertRefundDataInterface $convertOrderRefundData
    ) {
        $this->loggerAction = $loggerAction;
        $this->convertOrderRefundData = $convertOrderRefundData;
    }

    /** @param Refund $request */
    public function execute($request): void
    {
        RequestNotSupportedException::assertSupports($this, $request);

        $details = ArrayObject::ensureArrayObject($request->getModel());

        if ($details['created_in_mollie']) {
            $this->loggerAction->addLog('Received refund created in Mollie dashboard');
            return;
        }

        /** @var PaymentInterface $payment */
        $payment = $request->getFirstModel();

        try {
            $molliePayment = $this->mollieApiClient->payments->get($details['payment_mollie_id']);
            $refundData = $this->convertOrderRefundData->convert($details['metadata']['refund'], $payment->getCurrencyCode());

            if (true === $molliePayment->canBeRefunded()) {
                $molliePayment->refund(['amount' => $refundData]);
                $this->loggerAction->addLog(sprintf('Refund action with payment id %s', $molliePayment->id));
            } else {
                $this->loggerAction->addNegativeLog(sprintf('Payment %s can not be refunded.', $molliePayment->id));

                throw new UpdateHandlingException(sprintf('Payment %s can not be refunded.', $molliePayment->id));
            }
        } catch (ApiException $e) {
            $this->loggerAction->addNegativeLog(sprintf('API call failed: %s', htmlspecialchars($e->getMessage())));

            throw new \Exception(sprintf('API call failed: %s', htmlspecialchars($e->getMessage())));
        }
    }

    public function supports($request): bool
    {
        return
            $request instanceof Refund &&
            $request->getModel() instanceof \ArrayAccess
            ;
    }
}
