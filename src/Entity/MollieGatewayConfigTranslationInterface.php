<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Entity;

use Sylius\Component\Resource\Model\ResourceInterface;
use Sylius\Component\Resource\Model\TranslationInterface;

interface MollieGatewayConfigTranslationInterface extends ResourceInterface, TranslationInterface
{
    public function getId(): ?int;

    public function getName(): ?string;

    public function setName(?string $name): void;
}
