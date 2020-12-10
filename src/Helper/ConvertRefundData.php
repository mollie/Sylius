<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Helper;

use Sylius\RefundPlugin\Model\OrderItemUnitRefund;
use Sylius\RefundPlugin\Model\ShipmentRefund;

final class ConvertRefundData implements ConvertRefundDataInterface
{
    /** @var IntToStringConverter */
    private $intToStringConverter;

    public function __construct(IntToStringConverter $intToStringConverter)
    {
        $this->intToStringConverter = $intToStringConverter;
    }

    public function convert(array $data, string $currency): array
    {
        $value = 0;

        foreach ($data as $items) {
            foreach ($this->getTotal($items) as $total) {
                $value += $total;
            }
        }

        return [
            'currency' => $currency,
            'value' => $this->intToStringConverter->convertIntToString($value, 100),
        ];
    }

    private function getTotal(array $refundsData): iterable
    {
        /** @var OrderItemUnitRefund|ShipmentRefund $data */
        foreach ($refundsData as $refundData) {
            yield $refundData->total();
        }
    }
}
