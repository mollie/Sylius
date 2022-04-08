<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Twig\Extension;

use BitBag\SyliusMolliePlugin\BitBagSyliusMolliePlugin;
use BitBag\SyliusMolliePlugin\Checker\Version\MolliePluginLatestVersionCheckerInterface;
use Twig\Environment;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;
use Webmozart\Assert\Assert;

final class MolliePluginLatestVersion extends AbstractExtension
{
    /** @var MolliePluginLatestVersionCheckerInterface */
    private $latestVersionChecker;

    public function __construct(MolliePluginLatestVersionCheckerInterface $latestVersionChecker)
    {
        $this->latestVersionChecker = $latestVersionChecker;
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction(
                'bitbag_render_version_widget',
                [$this, 'versionRenderWidget'],
                [
                    'needs_environment' => true,
                    'is_safe' => ['html'],
                ]
            ),
        ];
    }

    public function versionRenderWidget(Environment $environment): string
    {
        Assert::notNull($this->latestVersionChecker->checkLatestVersion());
        $latestVersion = str_replace('v', '', $this->latestVersionChecker->checkLatestVersion());

        if (BitBagSyliusMolliePlugin::VERSION === $latestVersion) {
            return '';
        }

        return $environment->render('@SyliusAdmin/PaymentMethod/_versionNotification.html.twig', [
            'latestVersion' => $latestVersion,
            'currentVersion' => BitBagSyliusMolliePlugin::VERSION,
        ]);
    }
}
