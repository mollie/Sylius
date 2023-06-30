<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Repository;

use SyliusMolliePlugin\Factory\MollieGatewayFactory;
use SyliusMolliePlugin\Factory\MollieSubscriptionGatewayFactory;
use Sylius\Component\Core\Model\ChannelInterface;
use Sylius\Component\Core\Model\PaymentMethodInterface;

trait PaymentMethodRepository
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

    public function findOneByChannelAndGatewayFactoryName(ChannelInterface $channel, string $factoryName): ?PaymentMethodInterface
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
