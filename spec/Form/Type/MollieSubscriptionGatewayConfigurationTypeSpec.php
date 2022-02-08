<?php
/*
    This file was created by developers working at BitBag
    Do you need more information about us and what we do? Visit our   website!
    We are hiring developers from all over the world. Join us and start your new, exciting adventure and become part of us: https://bitbag.io/career
*/
declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Form\Type;

use BitBag\SyliusMolliePlugin\Form\Type\MollieGatewayConfigurationType;
use BitBag\SyliusMolliePlugin\Form\Type\MollieSubscriptionGatewayConfigurationType;
use PhpSpec\ObjectBehavior;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;

final class MollieSubscriptionGatewayConfigurationTypeSpec extends ObjectBehavior
{
    function it_is_initializable(): void
    {
        $this->shouldHaveType(MollieSubscriptionGatewayConfigurationType::class);
        $this->shouldHaveType(AbstractType::class);
    }

    function it_builds_form(FormBuilderInterface $builder): void
    {
        $builder->remove('single_click_enabled')->shouldBeCalledOnce();
        $builder->remove('components')->shouldBeCalledOnce();

        $this->buildForm($builder, []);
    }

    function it_gets_parent(): void
    {
        $this->getParent()->shouldReturn(MollieGatewayConfigurationType::class);
    }
}
