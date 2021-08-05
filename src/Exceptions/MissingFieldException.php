<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Exceptions;

use Symfony\Component\Validator\Exception\ValidatorException;

final class MissingFieldException extends ValidatorException
{
    public function __construct($field)
    {
        parent::__construct(sprintf("Expected field %s, but it's missing.", $field));
    }
}
