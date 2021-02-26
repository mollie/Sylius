<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Twig\Extension;

use BitBag\SyliusMolliePlugin\Checker\ApplePay\ApplePayEnabledCheckerInterface;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

final class ApplePayDirectEnabled extends AbstractExtension
{
    /** @var ApplePayEnabledCheckerInterface */
    private $applePayEnabledChecker;

    public function __construct(ApplePayEnabledCheckerInterface $applePayEnabledChecker)
    {
        $this->applePayEnabledChecker = $applePayEnabledChecker;
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('bitbag_render_apple_pay_direct',
                [$this->applePayEnabledChecker, 'isEnabled'], ['is_safe' => ['html']]
            ),
        ];
    }
}
