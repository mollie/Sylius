<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Creator;

use BitBag\SyliusMolliePlugin\DTO\ApiKeyTest;

interface ApiKeysTestCreatorInterface
{
    /** @var string */
    public const ERROR_STATUS = 'ERROR';

    /** @var string */
    public const OK_STATUS = 'OK';

    /** @var string */
    public const TEST_PREFIX = 'test_';

    /** @var string */
    public const LIVE_PREFIX = 'live_';

    public function create(string $keyType, string $key = null): ApiKeyTest;
}
