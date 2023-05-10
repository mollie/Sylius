<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Repository;

use SyliusMolliePlugin\Entity\TemplateMollieEmailTranslationInterface;

interface TemplateMollieEmailTranslationRepositoryInterface
{
    public function findOneByLocaleCodeAdnType(string $localeCode, string $type): ?TemplateMollieEmailTranslationInterface;
}
