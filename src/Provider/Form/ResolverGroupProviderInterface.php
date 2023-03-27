<?php


declare(strict_types=1);

namespace SyliusMolliePlugin\Provider\Form;

use Symfony\Component\Form\FormInterface;

interface ResolverGroupProviderInterface
{
    public function provide(FormInterface $form): array;
}
