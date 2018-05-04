<h1 align="center">
    <a href="http://bitbag.shop" target="_blank">
        <img src="doc/BitBagSyliusMolliePlugin.png" />
    </a>
    <br />
    <a href="https://packagist.org/packages/bitbag/mollie-plugin" title="License" target="_blank">
        <img src="https://img.shields.io/packagist/l/bitbag/mollie-plugin.svg" />
    </a>
    <a href="https://packagist.org/packages/bitbag/mollie-plugin" title="Version" target="_blank">
        <img src="https://img.shields.io/packagist/v/bitbag/mollie-plugin.svg" />
    </a>
    <a href="http://travis-ci.org/BitBagCommerce/SyliusMolliePlugin" title="Build status" target="_blank">
            <img src="https://img.shields.io/travis/BitBagCommerce/SyliusMolliePlugin/master.svg" />
        </a>
    <a href="https://scrutinizer-ci.com/g/BitBagCommerce/SyliusMolliePlugin/" title="Scrutinizer" target="_blank">
        <img src="https://img.shields.io/scrutinizer/g/BitBagCommerce/SyliusMolliePlugin.svg" />
    </a>
    <a href="https://packagist.org/packages/bitbag/mollie-plugin" title="Total Downloads" target="_blank">
        <img src="https://poser.pugx.org/bitbag/mollie-plugin/downloads" />
    </a>
</h1>

## Overview

This plugin allows you to integrate Mollie payment with Sylius platform app.

## Support

We work on amazing eCommerce projects on top of Sylius and Pimcore. Need some help or additional resources for a project?
Write us an email on mikolaj.krol@bitbag.pl or visit [our website](https://bitbag.shop/)! :rocket:

## Demo

We created a demo app with some useful use-cases of the plugin! Visit [demo.bitbag.shop](https://demo.bitbag.shop) to take a look at it. 
The admin can be accessed under [demo.bitbag.shop/admin](https://demo.bitbag.shop/admin) link and `sylius: sylius` credentials.

## Installation
```bash
$ composer require bitbag/mollie-plugin
```
    
Add plugin dependencies to your AppKernel.php file:

```php
public function registerBundles()
{
    return array_merge(parent::registerBundles(), [
        ...
        
        new \BitBag\SyliusMolliePlugin\BitBagSyliusMolliePlugin(),
    ]);
}
```

Import required config in your `app/config/config.yml` file:

```yaml
# app/config/config.yml

imports:
    ...
    
    - { resource: "@BitBagSyliusMolliePlugin/Resources/config/config.yml" }
```

Import routing **on top** of your `app/config/routing.yml` file:

```yaml
# app/config/routing.yml

bitbag_sylius_mollie_plugin:
    resource: "@BitBagSyliusMolliePlugin/Resources/config/routing.yml"
```

Update your database

```
$ bin/console doctrine:migrations:diff
$ bin/console doctrine:migrations:migrate
```

**Note:** If you are running it on production, add the `-e prod` flag to this command.

## Usage

### Rendering Mollie credit card form

You can  use `BitBagSyliusMolliePlugin:DirectDebit:_form.html.twig` templates for adding the form to supplementing the direct debit card data from the Twig UI.  

For an example on how to do that, take a look at [these source files](https://github.com/BitBagCommerce/SyliusMolliePlugin/tree/master/tests/Application/app/Resources/SyliusShopBundle/views).

## Customization

### Available services you can [decorate](https://symfony.com/doc/current/service_container/service_decoration.html) and forms you can [extend](http://symfony.com/doc/current/form/create_form_type_extension.html)

Run the below command to see what Symfony services are shared with this plugin:
 
```bash
$ bin/console debug:container bitbag_sylius_mollie_plugin
```

## Recurring subscription

### State Machine

For a better integration with Mollie’s recurring subscription, [you can use state machine callback.](http://docs.sylius.com/en/1.1/customization/state_machine.html#how-to-add-a-new-callback)

Available states:

- Processing: Subscription created but not active yet (startdate higher than “now”)
- Active: Subscription is in progress. Not all payments are done, but we wait until the next payment date
- Cancelled: The merchant cancelled the subscription
- Suspended: Mandates became invalid, so the subscription is suspended
- Completed: All subscription payments are executed according to the timetable

## Testing

```bash
$ composer install
$ cd tests/Application
$ yarn install
$ yarn run gulp
$ bin/console assets:install web -e test
$ bin/console doctrine:database:create -e test
$ bin/console doctrine:schema:create -e test
$ bin/console server:run 127.0.0.1:8080 -d web -e test
$ open http://localhost:8080
$ bin/behat
$ bin/phpspec run
```

## Contribution

Learn more about our contribution workflow on http://docs.sylius.org/en/latest/contributing/.
