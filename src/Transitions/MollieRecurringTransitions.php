<?php
declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Transitions;

final class MollieRecurringTransitions
{
    public const GRAPH = 'mollie_subscription_payment_graph';
    public const GRAPH_MANUAL = 'mollie_subscription_payment_graph_manual';

    public const TRANSITION_ACTIVATE = 'activate';

    public const TRANSITION_BEGIN_PROCESSING = 'begin_processing';

    public const TRANSITION_FINISH_PROCESSING = 'finish_processing';

    public const TRANSITION_PAUSE = 'pause';

    public const TRANSITION_RESUME = 'resume';

    public const TRANSITION_CANCEL = 'cancel';

    public const TRANSITION_COMPLETE = 'complete';

    private function __construct()
    {
    }
}
