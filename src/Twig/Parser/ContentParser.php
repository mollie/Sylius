<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * another great project.
 * You can find more information about us on https://bitbag.shop and write us
 * an email on mikolaj.krol@bitbag.pl.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Twig\Parser;

use Symfony\Contracts\Translation\TranslatorInterface;

final class ContentParser implements ContentParserInterface
{
    /** @var \Twig_Environment */
    private $twigEnvironment;

    /** @var array */
    private $enabledFunctions;

    /** @var TranslatorInterface */
    private $translator;

    public function __construct(
        \Twig_Environment $twigEnvironment,
        array $enabledFunctions,
        TranslatorInterface $translator
    ) {
        $this->twigEnvironment = $twigEnvironment;
        $this->enabledFunctions = $enabledFunctions;
        $this->translator = $translator;
    }

    public function parse(string $input, string $argument): string
    {
        preg_match_all('`{{\s*(?P<arguments>.+)\s*}}`', $input, $callMatches);

        foreach ($callMatches[0] as $index => $call) {
            $input = str_replace($call, $argument, $input);
        }

        return $input;
    }
}
