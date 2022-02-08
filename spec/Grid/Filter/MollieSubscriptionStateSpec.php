<?php
/*
    This file was created by developers working at BitBag
    Do you need more information about us and what we do? Visit our   website!
    We are hiring developers from all over the world. Join us and start your new, exciting adventure and become part of us: https://bitbag.io/career
*/
declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Grid\Filter;

use BitBag\SyliusMolliePlugin\Grid\Filter\MollieSubscriptionState;
use PhpSpec\ObjectBehavior;
use Sylius\Component\Grid\Data\DataSourceInterface;
use Sylius\Component\Grid\Data\ExpressionBuilderInterface;
use Sylius\Component\Grid\Filtering\FilterInterface;

final class MollieSubscriptionStateSpec extends ObjectBehavior
{
    function it_is_initializable(): void
    {
        $this->shouldHaveType(MollieSubscriptionState::class);
    }

    function it_should_implement_filter_interface(): void
    {
        $this->shouldImplement(FilterInterface::class);
    }

    function it_applies_when_array_key_exists(
        DataSourceInterface $source,
        ExpressionBuilderInterface $builder
    ): void
    {
        $data = ['state'=>[]]
        ;
        $source->getExpressionBuilder()->willReturn($builder);
        $builder->in('state',$data['state'])->willReturn(true);

        $source->restrict($builder->getWrappedObject()->in('state', $data['state']))->shouldBeCalledOnce();
    }
}
