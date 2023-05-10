<?php

declare(strict_types=1);

namespace SyliusMolliePlugin\Transitions;

final class MollieRecurringTransitions
{
    public const GRAPH_MANUAL = 'mollie_subscription_payment_graph_manual';

    public const TRANSITION_ACTIVATE = 'activate';

    public const TRANSITION_CANCEL = 'cancel';

    public const TRANSITION_COMPLETE = 'complete';

    private function __construct()
    {
    }
}
