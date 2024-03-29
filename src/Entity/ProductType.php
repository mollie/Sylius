<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Entity;

class ProductType implements ProductTypeInterface
{
    /** @var int|null */
    protected $id;

    /** @var string|null */
    protected $name;

    /** @var MollieGatewayConfigInterface|null */
    protected $mollieGatewayConfig;

    public function __toString(): string
    {
        if (null === $this->name) {
            return '';
        }

        return $this->name;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): void
    {
        $this->name = $name;
    }

    public function getMollieGatewayConfig(): ?MollieGatewayConfigInterface
    {
        return $this->mollieGatewayConfig;
    }

    public function setMollieGatewayConfig(?MollieGatewayConfigInterface $mollieGatewayConfig): void
    {
        $this->mollieGatewayConfig = $mollieGatewayConfig;
    }
}
