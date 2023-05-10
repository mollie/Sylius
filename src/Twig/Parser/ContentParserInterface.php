<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Twig\Parser;

interface ContentParserInterface
{
    public function parse(string $input, string $argument): string;
}
