<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\DTO;

use Mollie\Api\Resources\MethodCollection;

final class ApiKeyTest
{
    /** @var string */
    private $type;

    /** @var bool */
    private $key;

    /** @var MethodCollection|null */
    private $methods;

    public function __construct(string $type, bool $key = false, $methods = null)
    {
        $this->type = $type;
        $this->key = $key;
        $this->methods = $methods;
    }

    public function getType(): string
    {
        return $this->type;
    }

    public function getKey(): bool
    {
        return $this->key;
    }

    public function getMethods(): ?MethodCollection
    {
        return $this->methods;
    }
}
