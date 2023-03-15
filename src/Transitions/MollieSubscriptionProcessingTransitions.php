<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Transitions;

final class MollieSubscriptionProcessingTransitions
{
    public const GRAPH = 'mollie_subscription_processing_graph';

    public const TRANSITION_PROCESS = 'process';

    public const TRANSITION_SCHEDULE = 'schedule';

    private function __construct()
    {
    }
}
