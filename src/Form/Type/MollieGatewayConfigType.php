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
use BitBag\SyliusMolliePlugin\Entity\MollieGatewayConfigTranslationInterface;
use BitBag\SyliusMolliePlugin\Entity\ProductType;
use BitBag\SyliusMolliePlugin\Factory\MollieSubscriptionGatewayFactory;
use BitBag\SyliusMolliePlugin\Form\Type\Translation\MollieGatewayConfigTranslationType;
use BitBag\SyliusMolliePlugin\Options\Country\Options as CountryOptions;
use BitBag\SyliusMolliePlugin\Payments\Methods\AbstractMethod;
use BitBag\SyliusMolliePlugin\Payments\PaymentTerms\Options;
use BitBag\SyliusMolliePlugin\Validator\Constraints\PaymentSurchargeType;
use Sylius\Bundle\ProductBundle\Form\Type\ProductType as ProductFormType;
use Sylius\Bundle\ResourceBundle\Form\Type\AbstractResourceType;
use Sylius\Bundle\ResourceBundle\Form\Type\ResourceTranslationsType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CountryType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;

final class MollieGatewayConfigType extends AbstractResourceType
{
    /** @var DocumentationLinksInterface */
    private $documentationLinks;

    /** @var string */
    private $defaultLocale;

    public function __construct(
        string $dataClass,
        DocumentationLinksInterface $documentationLinks,
        string $defaultLocale,
        array $validationGroups = []
    ) {
        parent::__construct($dataClass, $validationGroups);
        $this->documentationLinks = $documentationLinks;
        $this->defaultLocale = $defaultLocale;
    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('enabled', CheckboxType::class, [
                'label' => 'bitbag_sylius_mollie_plugin.ui.enable',
            ])
            ->add('applePayDirectButton', CheckboxType::class, [
                'label' => 'bitbag_sylius_mollie_plugin.ui.enabled_buy_now_button',
                'help' => 'bitbag_sylius_mollie_plugin.form.enabled_buy_now_button_help',
            ])
            ->add('defaultCategory', EntityType::class, [
                'class' => ProductType::class,
                'label' => 'bitbag_sylius_mollie_plugin.form.product_type_default',
                'placeholder' => 'bitbag_sylius_mollie_plugin.form.no_category',
                'empty_data' => null,
                'help' => 'bitbag_sylius_mollie_plugin.form.product_type_default_help',
            ])
            ->add('translations', ResourceTranslationsType::class, [
                'label' => 'bitbag_sylius_mollie_plugin.ui.payment_name',
                'entry_type' => MollieGatewayConfigTranslationType::class,
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
            ->addEventListener(FormEvents::PRE_SET_DATA, function (FormEvent $event) {
                /** @var MollieGatewayConfigInterface $object */
                $object = $event->getData();
                $form = $event->getForm();

                $gateway = $object->getGateway();
                $factoryName = $gateway->getFactoryName();

                if (MollieSubscriptionGatewayFactory::FACTORY_NAME === $factoryName) {
                    $form->remove('paymentType');
                    $form->add('paymentType', ChoiceType::class, [
                        'label' => 'bitbag_sylius_mollie_plugin.ui.payment_type',
                        'choices' => Options::getAvailablePaymentType(),
                        'help' => $this->documentationLinks->getPaymentMethodDoc(),
                        'help_html' => true,
                        'attr' => [
                            'disabled' => 'disabled'
                        ]
                    ]);
                }

                if (false === $object->hasTranslationLocale($this->defaultLocale)) {
                    /** @var MollieGatewayConfigTranslationInterface $translation */
                    $translation = $object->getTranslation($this->defaultLocale);
                    $translation->setName($object->getName());
                }
            })
            ->addEventListener(FormEvents::POST_SET_DATA, function (FormEvent $event){
                $form = $event->getForm();
                /** @var MollieGatewayConfigInterface $object */
                $object = $form->getData();
                $data = $event->getData();

                if (in_array($object->getMethodId(), Options::getOnlyOrderAPIMethods())) {
                    $form->remove('paymentType');
                    $form->add('paymentType', ChoiceType::class, [
                        'label' => 'bitbag_sylius_mollie_plugin.ui.payment_type',
                        'choices' => Options::getAvailablePaymentType(),
                        'help' => $this->documentationLinks->getPaymentMethodDoc(),
                        'help_html' => true,
                        'attr' => [
                            'disabled' => 'disabled'
                        ]
                    ]);
                }

                $event->setData($data);
            })
            ->addEventListener(FormEvents::PRE_SUBMIT, function (FormEvent $event) {
                /** @var MollieGatewayConfigInterface $object */
                $object = $event->getForm()->getData();
                $data = $event->getData();

                if (in_array($object->getMethodId(), Options::getOnlyOrderAPIMethods())) {
                    $data['paymentType'] = AbstractMethod::ORDER_API;
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
