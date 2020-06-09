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

use Sylius\Component\Resource\Model\TranslatableTrait;
use Sylius\Component\Resource\Model\TranslationInterface;

class TemplateMollieEmail implements TemplateMollieEmailInterface
{
    use TranslatableTrait {
        __construct as private initializeTranslationsCollection;
    }

    public function __construct()
    {
        $this->initializeTranslationsCollection();
    }

    /** @var int */
    private $id;

    /** @var string */
    private $type;

    /** @var string */
    private $styleCss;

    public function getId(): int
    {
        return $this->id;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(?string $type): void
    {
        $this->type = $type;
    }

    public function getStyleCss(): string
    {
        return $this->styleCss;
    }

    public function setStyleCss(string $styleCss): void
    {
        $this->styleCss = $styleCss;
    }

    public function getName(): ?string
    {
        return $this->getBlockTranslation()->getName();
    }

    public function setName(?string $name): void
    {
        $this->getBlockTranslation()->setName($name);
    }

    public function getSubject(): ?string
    {
        return $this->getBlockTranslation()->getSubject();
    }

    public function setSubject(?string $subject): void
    {
        $this->getBlockTranslation()->setSubject($subject);
    }

    public function getContent(): ?string
    {
        return $this->getBlockTranslation()->getContent();
    }

    public function setContent(?string $content): void
    {
        $this->getBlockTranslation()->setContent($content);
    }

    /** @return TemplateMollieEmailTranslationInterface|TranslationInterface|null */
    protected function getBlockTranslation(): TranslationInterface
    {
        return $this->getTranslation();
    }

    protected function createTranslation(): TemplateMollieEmailTranslation
    {
        return new TemplateMollieEmailTranslation();
    }
}
