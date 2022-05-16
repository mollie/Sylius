<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Form\Transformer;

use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionConfigurationInterface;
use Symfony\Component\Form\DataTransformerInterface;

final class MollieIntervalTransformer implements DataTransformerInterface
{
    public function transform($value)
    {
        if (false === is_string($value)) {
            return [
                'amount' => null,
                'step' => null,
            ];
        }

        preg_match(
            sprintf(
                '/^(?<amount>\d{1,})\s(?<step>%s)$/',
                implode('|', MollieSubscriptionConfigurationInterface::SUPPORTED_INTERVAL_STEPS)
            ),
            $value,
            $matches
        );

        return $matches;
    }

    public function reverseTransform($value)
    {
        if (false === is_array($value)) {
            return null;
        }

        if (false === array_key_exists('amount', $value) || false === array_key_exists('step', $value)) {
            return null;
        }

        return sprintf('%d %s', $value['amount'], $value['step']);
    }
}
