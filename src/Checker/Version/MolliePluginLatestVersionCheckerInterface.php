<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Checker\Version;

interface MolliePluginLatestVersionCheckerInterface
{
    public function checkLatestVersion(): ?string;
}
