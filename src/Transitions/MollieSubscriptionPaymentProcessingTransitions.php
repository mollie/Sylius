<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Transitions;

final class MollieSubscriptionPaymentProcessingTransitions
{
    public const GRAPH = 'mollie_subscription_payment_state_graph';

    public const TRANSITION_BEGIN = 'begin';

    public const TRANSITION_SUCCESS = 'success';

    public const TRANSITION_FAILURE = 'failure';

    private function __construct()
    {
    }
}
