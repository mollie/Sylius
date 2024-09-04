<?php

declare(strict_types=1);

namespace SyliusMolliePlugin\Checker\Version;

use SyliusMolliePlugin\SyliusMolliePlugin;

final class MolliePluginLatestVersionChecker implements MolliePluginLatestVersionCheckerInterface
{
    public function checkLatestVersion(): ?string
    {
        return SyliusMolliePlugin::VERSION;
    }
}
