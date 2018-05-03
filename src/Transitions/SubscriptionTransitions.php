<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Transitions;

final class SubscriptionTransitions
{
    public const GRAPH = 'mollie_subscription';

    public const TRANSITION_PROCESS = 'process';
    public const TRANSITION_ACTIVATE = 'activate';
    public const TRANSITION_CANCEL = 'cancel';
    public const TRANSITION_SUSPEND = 'suspend';
    public const TRANSITION_COMPLETE = 'complete';
    public const TRANSITION_FAIL = 'fail';

    private function __construct()
    {
    }
}
