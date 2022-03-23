<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Resolver\Order;

use BitBag\SyliusMolliePlugin\Client\MollieApiClient;
use BitBag\SyliusMolliePlugin\Logger\MollieLoggerActionInterface;
use BitBag\SyliusMolliePlugin\Repository\OrderRepositoryInterface;
use Mollie\Api\Exceptions\ApiException;
use Sylius\Component\Order\Model\OrderInterface;
use Symfony\Component\Routing\Exception\ResourceNotFoundException;

final class MollieResourceOrderResolver implements MollieResourceOrderResolverInterface
{
    private MollieApiClient $mollieApiClient;

    private MollieLoggerActionInterface $loggerAction;

    private OrderRepositoryInterface $orderRepository;

    public function __construct(
        MollieApiClient $mollieApiClient,
        MollieLoggerActionInterface $loggerAction,
        OrderRepositoryInterface $orderRepository
    ) {
        $this->mollieApiClient = $mollieApiClient;
        $this->loggerAction = $loggerAction;
        $this->orderRepository = $orderRepository;
    }

    public function resolve(string $mollieResourceId): OrderInterface
    {
        try {
            switch ($mollieResourceId) {
                case str_starts_with($mollieResourceId, 'ord_'):
                    $mollieResource = $this->mollieApiClient->orders->get($mollieResourceId);

                    break;
                case str_starts_with($mollieResourceId, 'tr_'):
                    $mollieResource = $this->mollieApiClient->payments->get($mollieResourceId);

                    break;
                default:
                    $this
                        ->loggerAction
                        ->addNegativeLog(
                            sprintf(
                                'Mollie Resource Order Resolver received wrong resource: %s',
                                $mollieResourceId
                            )
                        );

                    throw new ResourceNotFoundException();
            }
        } catch (ApiException $e) {
            $this->loggerAction->addNegativeLog(sprintf('API call failed: %s', htmlspecialchars($e->getMessage())));

            throw $e;
        }

        $order = $this
            ->orderRepository
            ->find($mollieResource->metadata->order_id);

        return $order;
    }
}
