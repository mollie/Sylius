<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Resolver;

use Symfony\Component\HttpFoundation\Request;

interface ApiKeysTestResolverInterface
{
    public function fromRequest(Request $request): array;
}
