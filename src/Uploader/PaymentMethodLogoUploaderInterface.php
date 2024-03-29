<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Uploader;

use Doctrine\Common\Collections\Collection;

interface PaymentMethodLogoUploaderInterface
{
    public function upload(Collection $productBrochure): void;

    public function remove(string $path): bool;
}
