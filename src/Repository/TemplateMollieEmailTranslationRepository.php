<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Repository;

use SyliusMolliePlugin\Entity\TemplateMollieEmailTranslationInterface;
use Sylius\Bundle\ResourceBundle\Doctrine\ORM\EntityRepository;

class TemplateMollieEmailTranslationRepository extends EntityRepository implements TemplateMollieEmailTranslationRepositoryInterface
{
    public function findOneByLocaleCodeAdnType(string $localeCode, string $type): ?TemplateMollieEmailTranslationInterface
    {
        return $this->createQueryBuilder('tt')
            ->innerJoin('tt.translatable', 'templateEmail')
            ->where('tt.locale = :locale')
            ->andWhere('templateEmail.type = :type')
            ->setParameter('locale', $localeCode)
            ->setParameter('type', $type)
            ->getQuery()
            ->getOneOrNullResult()
            ;
    }
}
