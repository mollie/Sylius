<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Repository;

use BitBag\SyliusMolliePlugin\Entity\SubscriptionInterface;
use Sylius\Bundle\ResourceBundle\Doctrine\ORM\EntityRepository;

class SubscriptionRepository extends EntityRepository implements SubscriptionRepositoryInterface
{
    /**
     * {@inheritdoc}
     */
    public function findOneByOrderId($orderId): ?SubscriptionInterface
    {
        return $this->createQueryBuilder('o')
            ->where('o.order = :orderId')
            ->setParameter('orderId', $orderId)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
}
