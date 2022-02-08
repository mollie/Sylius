<?php
/*
    This file was created by developers working at BitBag
    Do you need more information about us and what we do? Visit our   website!
    We are hiring developers from all over the world. Join us and start your new, exciting adventure and become part of us: https://bitbag.io/career
*/
declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Form\Type;

use BitBag\SyliusMolliePlugin\Documentation\DocumentationLinksInterface;
use BitBag\SyliusMolliePlugin\Form\Type\MollieGatewayConfigType;
use PhpSpec\ObjectBehavior;
use Sylius\Bundle\ResourceBundle\Form\Type\AbstractResourceType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\FormBuilderInterface;

final class MollieGatewayConfigTypeSpec extends ObjectBehavior
{
    function let(DocumentationLinksInterface $documentationLinks): void
    {
        $this->beConstructedWith(
            'data_class',
            $documentationLinks,
            'en_US'
        );
    }

    function it_is_initializable(): void
    {
        $this->shouldHaveType(MollieGatewayConfigType::class);
        $this->shouldHaveType(AbstractResourceType::class);
    }

    function it_builds_form(
        FormBuilderInterface $builder
    ): void
    {

        $this->buildForm($builder, []);

        $builder
            ->add('enabled', CheckboxType::class, [
                'label' => 'bitbag_sylius_mollie_plugin.ui.enable',
            ])->shouldBeCalledOnce();
    }


}
