<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Repository;

use Sylius\RefundPlugin\Doctrine\ORM\CreditMemoRepository as BaseCreditMemoRepository;

class CreditMemoRepository extends BaseCreditMemoRepository implements CreditMemoRepositoryInterface
{
    public function findByOrderNumberAndDateTime(
        int $orderId,
        \DateTime $dateTime,
        int $amount
    ): array {
        return $this->createQueryBuilder('o')
            ->andWhere('o.order = :orderId')
            ->andWhere('o.issuedAt > :issuedAt')
            ->andWhere('o.total = :amount')
            ->setParameter('orderId', $orderId)
            ->setParameter('issuedAt', $dateTime)
            ->setParameter('amount', $amount)
            ->getQuery()
            ->getResult()
        ;
    }
}
