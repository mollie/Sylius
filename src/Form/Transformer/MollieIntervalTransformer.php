<?php
declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Form\Transformer;

use BitBag\SyliusMolliePlugin\Entity\MollieSubscriptionConfigurationInterface;
use Symfony\Component\Form\DataTransformerInterface;

final class MollieIntervalTransformer implements DataTransformerInterface
{
    public function transform($value)
    {
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
