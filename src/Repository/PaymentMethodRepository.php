<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Repository;

use BitBag\SyliusMolliePlugin\Factory\MollieGatewayFactory;
use BitBag\SyliusMolliePlugin\Factory\MollieSubscriptionGatewayFactory;
use Sylius\Bundle\CoreBundle\Doctrine\ORM\PaymentMethodRepository as BasePaymentMethodRepository;
use Sylius\Component\Core\Model\ChannelInterface;
use Sylius\Component\Core\Model\PaymentMethodInterface;

class PaymentMethodRepository extends BasePaymentMethodRepository implements PaymentMethodRepositoryInterface
{
    public function findAllByFactoryNameAndCode(string $code): array
    {
        return $this->createQueryBuilder('o')
            ->innerJoin('o.gatewayConfig', 'gatewayConfig')
            ->where('gatewayConfig.factoryName in (:factoryName)')
            ->andWhere('o.code != :code')
            ->setParameter('factoryName', [MollieGatewayFactory::FACTORY_NAME, MollieSubscriptionGatewayFactory::FACTORY_NAME])
            ->setParameter('code', $code)
            ->getQuery()
            ->getResult()
        ;
    }

    public function findOneByChannelAndGatewayFactoryName(ChannelInterface $channel, $factoryName): ?PaymentMethodInterface
    {
        return $this->createQueryBuilder('o')
            ->innerJoin('o.gatewayConfig', 'gatewayConfig')
            ->andWhere('o.enabled = true')
            ->andWhere(':channel MEMBER OF o.channels')
            ->andWhere('gatewayConfig.factoryName = :factoryName')
            ->setParameter('channel', $channel)
            ->setParameter('factoryName', $factoryName)
            ->addOrderBy('o.position')
            ->getQuery()
            ->getOneOrNullResult()
            ;
    }
}
