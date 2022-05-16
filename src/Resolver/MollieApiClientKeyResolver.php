<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Resolver;

use BitBag\SyliusMolliePlugin\Client\MollieApiClient;
use BitBag\SyliusMolliePlugin\Entity\OrderInterface;
use BitBag\SyliusMolliePlugin\Form\Type\MollieGatewayConfigurationType;
use BitBag\SyliusMolliePlugin\Logger\MollieLoggerActionInterface;
use BitBag\SyliusMolliePlugin\Repository\PaymentMethodRepositoryInterface;
use Mollie\Api\Exceptions\ApiException;
use Sylius\Component\Channel\Context\ChannelContextInterface;
use Sylius\Component\Core\Model\ChannelInterface;
use Sylius\Component\Resource\Exception\UpdateHandlingException;
use Webmozart\Assert\Assert;

final class MollieApiClientKeyResolver implements MollieApiClientKeyResolverInterface
{
    /** @var MollieApiClient */
    private $mollieApiClient;

    /** @var MollieLoggerActionInterface */
    private $loggerAction;

    /** @var PaymentMethodRepositoryInterface */
    private $paymentMethodRepository;

    /** @var ChannelContextInterface */
    private $channelContext;

    /** @var MollieFactoryNameResolverInterface */
    private $factoryNameResolver;

    public function __construct(
        MollieApiClient $mollieApiClient,
        MollieLoggerActionInterface $loggerAction,
        PaymentMethodRepositoryInterface $paymentMethodRepository,
        ChannelContextInterface $channelContext,
        MollieFactoryNameResolverInterface $factoryNameResolver
    ) {
        $this->mollieApiClient = $mollieApiClient;
        $this->loggerAction = $loggerAction;
        $this->paymentMethodRepository = $paymentMethodRepository;
        $this->channelContext = $channelContext;
        $this->factoryNameResolver = $factoryNameResolver;
    }

    public function getClientWithKey(OrderInterface $order = null): MollieApiClient
    {
        /** @var ChannelInterface $channel */
        $channel = $this->channelContext->getChannel();

        $paymentMethod = $this->paymentMethodRepository->findOneByChannelAndGatewayFactoryName(
            $channel,
            $this->factoryNameResolver->resolve($order)
        );

        if (null === $paymentMethod) {
            throw new UpdateHandlingException(sprintf('No payment method found'));
        }

        $gateway = $paymentMethod->getGatewayConfig();

        Assert::notNull($gateway);
        $config = $gateway->getConfig();

        $environment = true === $config['environment'] ?
            MollieGatewayConfigurationType::API_KEY_LIVE :
            MollieGatewayConfigurationType::API_KEY_TEST;

        try {
            /** @var MollieApiClient $mollieApiClient */
            $mollieApiClient = $this->mollieApiClient->setApiKey($config[$environment]);

            return $mollieApiClient;
        } catch (ApiException $e) {
            $this->loggerAction->addNegativeLog(sprintf('API call failed: %s', $e->getMessage()));

            throw new UpdateHandlingException(sprintf('API call failed: %s', htmlspecialchars($e->getMessage())));
        }
    }
}
