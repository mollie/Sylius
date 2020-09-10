<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Entity;

use Sylius\Component\Resource\Model\ResourceInterface;
use Sylius\Component\Resource\Model\TranslatableInterface;

interface TemplateMollieEmailInterface extends ResourceInterface, TranslatableInterface
{
    public const PAYMENT_LINK = 'payment_link';
    public const PAYMENT_LINK_ABANDONED = 'payment_link_abandoned';

    public function getId(): int;

    public function getName(): ?string;

    public function setName(?string $name): void;

    public function getSubject(): ?string;

    public function setSubject(?string $subject): void;

    public function getContent(): ?string;

    public function setContent(?string $content): void;

    public function getType(): ?string;

    public function setType(?string $type): void;

    public function getStyleCss(): ?string;

    public function setStyleCss(?string $styleCss): void;
}
