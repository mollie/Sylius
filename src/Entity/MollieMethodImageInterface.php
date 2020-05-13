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

interface MollieMethodImageInterface extends ResourceInterface
{
    public function getId();

    public function getName(): ?string;

    public function setName(?string $name): void;

    public function getFile(): ?\SplFileInfo;

    public function setFile(?\SplFileInfo $file): void;

    public function hasFile(): bool;

    public function getPath(): ?string;

    public function setPath(?string $path): void;

    public function getMollieGatewayConfig(): MollieGatewayConfigInterface;

    public function setMollieGatewayConfig(MollieGatewayConfigInterface $mollieGatewayConfig): void;
}
