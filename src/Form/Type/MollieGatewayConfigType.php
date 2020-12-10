<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Form\Type;

use BitBag\SyliusMolliePlugin\Documentation\DocumentationLinksInterface;
use BitBag\SyliusMolliePlugin\Entity\MollieGatewayConfigInterface;
use BitBag\SyliusMolliePlugin\Entity\ProductType;
use BitBag\SyliusMolliePlugin\Options\Country\Options as CountryOptions;
use BitBag\SyliusMolliePlugin\Payments\Methods\MealVoucher;
use BitBag\SyliusMolliePlugin\Payments\PaymentTerms\Options;
use BitBag\SyliusMolliePlugin\Validator\Constraints\PaymentSurchargeType;
use Sylius\Bundle\ProductBundle\Form\Type\ProductType as ProductFormType;
use Sylius\Bundle\ResourceBundle\Form\Type\AbstractResourceType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CountryType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\Validator\Constraints\NotBlank;

final class MollieGatewayConfigType extends AbstractResourceType
{
    /** @var DocumentationLinksInterface */
    private $documentationLinks;

    public function __construct(string $dataClass, array $validationGroups = [], DocumentationLinksInterface $documentationLinks)
    {
        parent::__construct($dataClass, $validationGroups);
        $this->documentationLinks = $documentationLinks;
    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('enabled', CheckboxType::class, [
                'label' => 'bitbag_sylius_mollie_plugin.ui.enable',
            ])
            ->add('defaultCategory', EntityType::class, [
                'class' => ProductType::class,
                'label' => 'bitbag_sylius_mollie_plugin.form.product_type_default',
                'placeholder' => 'bitbag_sylius_mollie_plugin.form.no_category',
                'empty_data' => null,
                'help' => 'bitbag_sylius_mollie_plugin.form.product_type_default_help',
            ])
            ->add('name', TextType::class, [
                'required' => true,
                'label' => 'bitbag_sylius_mollie_plugin.ui.payment_name',
                'constraints' => [
                    new NotBlank([
                        'message' => 'bitbag_sylius_mollie_plugin.payment_method.not_blank',
                        'groups' => ['sylius'],
                    ]),
                ],
            ])
            ->add('paymentType', ChoiceType::class, [
                'label' => 'bitbag_sylius_mollie_plugin.ui.payment_type',
                'choices' => Options::getAvailablePaymentType(),
                'help' => $this->documentationLinks->getPaymentMethodDoc(),
                'help_html' => true,
            ])
            ->add('paymentDescription', TextType::class, [
                'label' => 'bitbag_sylius_mollie_plugin.form.payment_methods.payment_description',
                'help' => 'bitbag_sylius_mollie_plugin.form.payment_methods.payment_description_help',
                'empty_data' => '{ordernumber}',
                'attr' => [
                    'placeholder' => '{ordernumber}',
                ],
            ])
            ->add('paymentSurchargeFee', PaymentSurchargeFeeType::class, [
                'label' => false,
                'constraints' => [new PaymentSurchargeType(['groups' => 'sylius'])],
            ])
            ->add('customizeMethodImage', CustomizeMethodImageType::class, [
                'label' => false,
            ])
            ->add('country_restriction', ChoiceType::class, [
                'label' => 'bitbag_sylius_mollie_plugin.ui.country_level_restriction',
                'choices' => CountryOptions::getCountriesConfigOptions(),
            ])
            ->add('countryLevel_excluded', CountryType::class, [
                'label' => 'bitbag_sylius_mollie_plugin.ui.country_level_exclude',
                'required' => false,
                'multiple' => true,
            ])
            ->add('countryLevel_allowed', CountryType::class, [
                'label' => 'bitbag_sylius_mollie_plugin.ui.country_level_allow',
                'required' => false,
                'multiple' => true,
            ])
            ->add('countryLevel', CountryType::class, [
                'label' => 'bitbag_sylius_mollie_plugin.ui.country_level_restriction',
                'required' => false,
                'multiple' => true,
            ])
            ->add('orderExpiration', ChoiceType::class, [
                'label' => 'bitbag_sylius_mollie_plugin.ui.order_expiration_days',
                'required' => false,
                'choices' => array_combine(
                    range(1, 100, 1),
                    range(1, 100, 1)
                ),
            ])
            ->add('loggerEnabled', CheckboxType::class, [
                'label' => 'bitbag_sylius_mollie_plugin.ui.debug_level_enabled',
            ])
            ->add('loggerLevel', ChoiceType::class, [
                'label' => 'bitbag_sylius_mollie_plugin.ui.debug_level_log',
                'choices' => Options::getDebugLevels(),
            ])
            ->addEventListener(FormEvents::PRE_SUBMIT, function (FormEvent $event) {
                /** @var MollieGatewayConfigInterface $object */
                $object = $event->getForm()->getData();
                $data = $event->getData();

                if ($object->getMethodId() === MealVoucher::MEAL_VOUCHERS) {
                    $data['paymentType'] = 'ORDER_API';
                }

                $event->setData($data);
            });
    }

    public function getBlockPrefix(): string
    {
        return 'bitbag_mollie_payment_method';
    }

    public static function getExtendedTypes(): array
    {
        return [ProductFormType::class];
    }
}
