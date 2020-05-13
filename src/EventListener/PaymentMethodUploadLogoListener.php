<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\EventListener;

use BitBag\SyliusMolliePlugin\Entity\GatewayConfigInterface;
use BitBag\SyliusMolliePlugin\Entity\MollieGatewayConfigInterface;
use BitBag\SyliusMolliePlugin\Uploader\PaymentMethodLogoUploaderInterface;
use Doctrine\ORM\EntityManagerInterface;
use Sylius\Component\Core\Model\PaymentMethodInterface;
use Symfony\Component\EventDispatcher\GenericEvent;
use Webmozart\Assert\Assert;

final class PaymentMethodUploadLogoListener
{
    /** @var EntityManagerInterface */
    private $entityManager;

    /** @var PaymentMethodLogoUploaderInterface */
    private $logoUploader;

    public function __construct(EntityManagerInterface $entityManager, PaymentMethodLogoUploaderInterface $logoUploader)
    {
        $this->entityManager = $entityManager;
        $this->logoUploader = $logoUploader;
    }

    public function uploadLogo(GenericEvent $event): void
    {
        $subject = $event->getSubject();
        Assert::isInstanceOf($subject, PaymentMethodInterface::class);

        /** @var GatewayConfigInterface $gatewayConfig */
        $gatewayConfig = $subject->getGatewayConfig();

        if ($gatewayConfig->getMollieGatewayConfig()->isEmpty()) {
            return;
        }

        $this->uploadMollieConfigLogo($gatewayConfig);
    }

    private function uploadMollieConfigLogo(GatewayConfigInterface $gatewayConfig): void
    {
        $mollieConfigs = $gatewayConfig->getMollieGatewayConfig();

        $this->logoUploader->upload($mollieConfigs);

        /** @var MollieGatewayConfigInterface $mollieConfig */
        foreach ($mollieConfigs as $mollieConfig) {
            if (false === $mollieConfig->getCustomizeMethodImage()->hasFile()) {
                $mollieConfig->getCustomizeMethodImage()->setFile(null);
            }
        }

        $gatewayConfig->setMollieGatewayConfig($mollieConfigs);
        $this->entityManager->persist($gatewayConfig);
    }
}
