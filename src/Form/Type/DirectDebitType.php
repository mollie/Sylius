<?php

/*
 * This file has been created by developers from BitBag.
 * Feel free to contact us once you face any issues or want to start
 * You can find more information about us on https://bitbag.io and write us
 * an email on hello@bitbag.io.
 */

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Validator\Constraints\Iban;
use Symfony\Component\Validator\Constraints\NotBlank;

final class DirectDebitType extends AbstractType
{
    /** @var SessionInterface */
    private $session;

    /** @param SessionInterface $session */
    public function __construct(SessionInterface $session)
    {
        $this->session = $session;
    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('consumerName', TextType::class, [
                'label' => 'bitbag_sylius_mollie_plugin.ui.consumer_name',
                'constraints' => [
                    new NotBlank([
                        'message' => 'bitbag_sylius_mollie_plugin.consumer_name.not_blank',
                        'groups' => ['sylius'],
                    ]),
                ],
                'data' => $this->session->get('mollie_direct_debit_data')['consumerName'] ?? null,
            ])
            ->add('iban', TextType::class, [
                'label' => 'bitbag_sylius_mollie_plugin.ui.iban',
                'constraints' => [
                    new NotBlank([
                        'message' => 'bitbag_sylius_mollie_plugin.iban.not_blank',
                        'groups' => ['sylius'],
                    ]),
                    new Iban([
                        'message' => 'bitbag_sylius_mollie_plugin.iban.incorrect',
                        'groups' => ['sylius'],
                    ]),
                ],
                'data' => $this->session->get('mollie_direct_debit_data')['iban'] ?? null,
            ])
            ->addEventListener(FormEvents::POST_SUBMIT, function (FormEvent $event) {
                $data = $event->getData();

                $this->session->set('mollie_direct_debit_data', $data);
            })
        ;
    }
}
