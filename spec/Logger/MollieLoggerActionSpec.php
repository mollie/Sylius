<?php
/*
    This file was created by developers working at BitBag
    Do you need more information about us and what we do? Visit our   website!
    We are hiring developers from all over the world. Join us and start your new, exciting adventure and become part of us: https://bitbag.io/career
*/
declare(strict_types=1);

namespace spec\BitBag\SyliusMolliePlugin\Logger;

use BitBag\SyliusMolliePlugin\Entity\GatewayConfigInterface;
use BitBag\SyliusMolliePlugin\Entity\MollieLoggerInterface;
use BitBag\SyliusMolliePlugin\Factory\MollieLoggerFactoryInterface;
use BitBag\SyliusMolliePlugin\Logger\MollieLoggerAction;
use BitBag\SyliusMolliePlugin\Logger\MollieLoggerActionInterface;
use BitBag\SyliusMolliePlugin\Resolver\MollieFactoryNameResolverInterface;
use PhpSpec\ObjectBehavior;
use Sylius\Component\Resource\Repository\RepositoryInterface;
use Symfony\Component\HttpFoundation\Response;

final class MollieLoggerActionSpec extends ObjectBehavior
{
    function let(
        MollieLoggerFactoryInterface $loggerFactory,
        RepositoryInterface $repository,
        RepositoryInterface $gatewayRepository,
        MollieFactoryNameResolverInterface $mollieFactoryNameResolver
    ): void {
        $this->beConstructedWith(
            $loggerFactory,
            $repository,
            $gatewayRepository,
            $mollieFactoryNameResolver
        );
        $mollieFactoryNameResolver->resolve()->willReturn('mollie_subscription');
    }

    function it_is_initializable(): void
    {
        $this->shouldHaveType(MollieLoggerAction::class);
    }

    function it_should_implement_mollie_logger_action_interface(): void
    {
        $this->shouldImplement(MollieLoggerActionInterface::class);
    }

    function it_add_log_when_log_everything_is_set(
        MollieLoggerFactoryInterface $loggerFactory,
        MollieLoggerInterface $logger,
        RepositoryInterface $repository,
        RepositoryInterface $gatewayRepository,
        GatewayConfigInterface $config
    ): void {
        $gatewayRepository->findOneBy(['factoryName' => 'mollie_subscription'])->willReturn($config);
        $logLevel = MollieLoggerActionInterface::NOTICE;
        $message = 'log_test_message';
        $errorCode = Response::HTTP_OK;
        $loggerFactory->create($message, $logLevel, $errorCode)->willReturn($logger);

        $config->getConfig()->willReturn([
            'loggerLevel' => 'undefined'
        ]);
        $this->addLog($message, $logLevel, $errorCode);
        $repository->add($logger)->shouldNotBeCalled();

        $config->getConfig()->willReturn([
            'loggerLevel' => 2
        ]);
        $this->addLog($message, $logLevel, $errorCode);
        $repository->add($logger)->shouldBeCalledOnce();
    }

    function it_add_log_when_log_errors_is_set(
        MollieLoggerFactoryInterface $loggerFactory,
        MollieLoggerInterface $logger,
        RepositoryInterface $repository,
        RepositoryInterface $gatewayRepository,
        GatewayConfigInterface $config
    ): void {
        $logLevel = MollieLoggerActionInterface::ERROR;
        $message = 'log_test_message';
        $errorCode = Response::HTTP_OK;
        $loggerFactory->create($message, $logLevel, $errorCode)->willReturn($logger);

        $gatewayRepository->findOneBy(['factoryName' => 'mollie_subscription'])->willReturn($config);
        $config->getConfig()->willReturn([
            'loggerLevel' => 1
        ]);
        $this->addLog($message, $logLevel, $errorCode);
        $repository->add($logger)->shouldBeCalledOnce();
    }

    function it_cannot_add_log(
        MollieLoggerFactoryInterface $loggerFactory,
        MollieLoggerInterface $logger,
        RepositoryInterface $repository,
        RepositoryInterface $gatewayRepository
    ): void {
        $gatewayRepository->findOneBy(['factoryName' => 'mollie_subscription'])->willReturn(null);
        $logLevel = MollieLoggerActionInterface::ERROR;
        $message = 'log_test_message';
        $errorCode = Response::HTTP_OK;
        $loggerFactory->create($message, $logLevel, $errorCode)->willReturn($logger);

        $this->addLog($message, $logLevel, $errorCode);
        $repository->add($logger)->shouldNotBeCalled();
    }

    function it_add_negative_log_when_log_everything_is_set(
        MollieLoggerFactoryInterface $loggerFactory,
        MollieLoggerInterface $logger,
        RepositoryInterface $repository,
        RepositoryInterface $gatewayRepository,
        GatewayConfigInterface $config
    ): void {
        $gatewayRepository->findOneBy(['factoryName' => 'mollie_subscription'])->willReturn($config);
        $logLevel = MollieLoggerActionInterface::NOTICE;
        $message = 'log_test_negative_message';
        $errorCode = Response::HTTP_INTERNAL_SERVER_ERROR;
        $loggerFactory->create($message, $logLevel, $errorCode)->willReturn($logger);

        $config->getConfig()->willReturn([
            'loggerLevel' => 'undefined'
        ]);
        $this->addLog($message, $logLevel, $errorCode);
        $repository->add($logger)->shouldNotBeCalled();

        $config->getConfig()->willReturn([
            'loggerLevel' => 2
        ]);
        $this->addLog($message, $logLevel, $errorCode);
        $repository->add($logger)->shouldBeCalledOnce();
    }

    function it_add_negative_log_when_log_errors_is_set(
        MollieLoggerFactoryInterface $loggerFactory,
        MollieLoggerInterface $logger,
        RepositoryInterface $repository,
        RepositoryInterface $gatewayRepository,
        GatewayConfigInterface $config
    ): void {
        $logLevel = MollieLoggerActionInterface::ERROR;
        $message = 'log_test__negative_message';
        $errorCode = Response::HTTP_INTERNAL_SERVER_ERROR;
        $loggerFactory->create($message, $logLevel, $errorCode)->willReturn($logger);

        $gatewayRepository->findOneBy(['factoryName' => 'mollie_subscription'])->willReturn($config);
        $config->getConfig()->willReturn([
            'loggerLevel' => 1
        ]);
        $this->addLog($message, $logLevel, $errorCode);
        $repository->add($logger)->shouldBeCalledOnce();
    }

    function it_cannot_add_negative_log(
        MollieLoggerFactoryInterface $loggerFactory,
        MollieLoggerInterface $logger,
        RepositoryInterface $repository,
        RepositoryInterface $gatewayRepository,
        GatewayConfigInterface $config
    ): void {
        $gatewayRepository->findOneBy(['factoryName' => 'mollie_subscription'])->willReturn(null);
        $logLevel = MollieLoggerActionInterface::ERROR;
        $message = 'log_test__negative_message';
        $errorCode = Response::HTTP_INTERNAL_SERVER_ERROR;
        $loggerFactory->create($message, $logLevel, $errorCode)->willReturn($logger);

        $this->addLog($message, $logLevel, $errorCode);
        $repository->add($logger)->shouldNotBeCalled();
    }
}
