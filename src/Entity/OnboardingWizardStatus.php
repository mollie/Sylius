<?php

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Entity;

use Sylius\Component\Core\Model\AdminUserInterface;

final class OnboardingWizardStatus implements OnboardingWizardStatusInterface
{
    /** @var int */
    protected $id;

    /** @var AdminUserInterface */
    protected $adminUser;

    /** @var bool */
    protected $completed;

    public function isCompleted(): bool
    {
        return $this->completed;
    }

    public function setCompleted(bool $completed): void
    {
        $this->completed = $completed;
    }

    public function getAdminUser(): AdminUserInterface
    {
        return $this->adminUser;
    }

    public function setAdminUser(AdminUserInterface $adminUser): void
    {
        $this->adminUser = $adminUser;
    }
}
