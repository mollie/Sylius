<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace Tests\BitBag\SyliusMolliePlugin\Behat\Page\Shop\Checkout;

use Sylius\Behat\Page\Shop\Checkout\CompletePage as BaseCompletePage;

final class CompletePage extends BaseCompletePage implements CompletePageInterface
{
    /**
     * {@inheritdoc}
     */
    public function specifyDirectDebit(string $consumerName, string $iban): void
    {
        $this->getDocument()->fillField('Consumer name', $consumerName);
        $this->getDocument()->fillField('IBAN', $iban);
    }
}
