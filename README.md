# [![](https://bitbag.io/wp-content/uploads/2020/10/mollie-1024x535.png)](https://bitbag.io/contact-us/?utm_source=github&utm_medium=referral&utm_campaign=plugins_mollie)

# Mollie Payments Plugin for Sylius
----

[![](https://img.shields.io/packagist/l/bitbag/mollie-plugin.svg) ](https://packagist.org/packages/bitbag/mollie-plugin "License") [ ![](https://img.shields.io/packagist/v/bitbag/mollie-plugin.svg) ](https://packagist.org/packages/bitbag/mollie-plugin "Version") [ ![](https://img.shields.io/scrutinizer/g/BitBagCommerce/SyliusMolliePlugin.svg) ](https://scrutinizer-ci.com/g/BitBagCommerce/SyliusMolliePlugin/ "Scrutinizer") [![](https://poser.pugx.org/bitbag/mollie-plugin/downloads)](https://packagist.org/packages/bitbag/mollie-plugin "Total Downloads") [![Slack](https://img.shields.io/badge/community%20chat-slack-FF1493.svg)](http://sylius-devs.slack.com) [![Support](https://img.shields.io/badge/support-contact%20author-blue])](https://bitbag.io/contact-us/?utm_source=github&utm_medium=referral&utm_campaign=plugins_mollie)

## Table of Content

***

* [Overview](#overview)
* [Support](#we-are-here-to-help)
* [Installation](#installation)
  * [Requirements](#requirements)
  * [Usage](#usage)
  * [Customization](#customization)
  * [Testing](#testing)
  * [Recurring subscription (internal CRON)](doc/recurring.md)
  * [Frontend part](#frontend)
* [Recurring payments](doc/recurring.md)
* [About us](#about-us)
    * [Community](#community)
* [Demo Sylius shop](#demo-sylius-shop)
* [Additional Sylius resources for developers](#additional-resources-for-developers)
* [License](#license)
* [Contact](#contact)

# Overview
----

![Screenshot showing payment methods show in shop](doc/payment_methods_shop.png)

![Screenshot showing payment methods show in admin](doc/payment_methods_admin.png)

![Screenshot showing payment method config in admin](doc/payment_method_config.png)

[Mollie](https://www.mollie.com/) is the most popular and advanced payment gateway integration with Sylius. This plugin is officially certified by Mollie. The integration currently supports the following payment methods:

1. Credit Cards (Master Card, VISA, American Express)
2. PayPal
3. ApplePay
4. Klarna
5. iDEAL
6. SEPA
7. SOFORT
8. EPS
9. Giropay
10. KBC/CBC Payment Button
11. Przelewy24
12. ING Home'Pay
13. Belfius Pay Button
14. Gift cards
15. Apple Pay Direct

Few words from Mollie: Our mission is to create a greater playing field for everyone. By offering convenient, safe world-wide payment solutions we remove barriers so you could focus on growing your business. Being authentic is our baseline.

Mollie is one of Europe's fastest-growing fin-tech companies. We provide a simple payment API, that enables webshop and app builders to implement more than twenty different payment methods in one go. Our packages and plugins are completely open-source, freely available, and easy to integrate into your current project.

Mollie thrives on innovation. When we started we spearheaded the payments industry by introducing effortless payment products that were easier, cheaper, and more flexible than what the rigid, cumbersome banks could do. Now, more than a decade later, trusted by 70.000+ businesses, Mollie is still building innovative products and working hard to make payments better.

## We are here to help
This **open-source plugin was developed to help the Sylius community** and make Mollie payments platform available to any Sylius store. If you have any additional questions, would like help with installing or configuring the plugin or need any assistance with your Sylius project - let us know by sending an email to support@mollie.com


# Installation
----

### Requirements

We work on stable, supported and up-to-date versions of packages. We recommend you to do the same.

| Package | Version |
| --- | --- |
| PHP |  ^7.2 |
| ext-json: * |  |
| mollie/mollie-api-php |  ^2.0 |
| sylius/admin-order-creation-plugin |  ^0.9.0 |
| sylius/refund-plugin |  ^1.0.0-RC.3 |
| sylius/sylius |  ^1.7.0 |

----


For the full installation guide please go to [installation](doc/installation.md)

## Usage
----
During configuration first, save the keys to the database and then click "Load methods"

### Rendering Mollie credit card form

You can use `BitBagSyliusMolliePlugin:DirectDebit:_form.html.twig` and `@BitBagSyliusMolliePlugin/Grid/Action/cancelSubscriptionMollie.html.twig` templates for adding the form to supplementing the direct debit card data from and cancel the subscription form the Twig UI.

For an example on how to do that, take a look at [these source files](tests/Application/templates/bundles/SyliusShopBundle).

## Customization
----
##### You can [decorate](https://symfony.com/doc/current/service_container/service_decoration.html) available services and [extend](https://symfony.com/doc/current/form/create_form_type_extension.html) current forms.

Run the below command to see what Symfony services are shared with this plugin:

```
$ bin/console debug:container bitbag_sylius_mollie_plugin
```

## Plugin Development
----
### Instalation
```
$ composer install
$ cd tests/Application
$ yarn install
$ yarn encore dev
$ bin/console assets:install -e test
$ bin/console doctrine:database:create -e test
$ bin/console doctrine:schema:create -e test
$ symfony server:start
$ open http://localhost:8080 // or the port showed in your terminal while runing command with symfony server:start
```

* Also in tests/Application/config/packages/webpack_encore.yaml, make sure there is such configuration:

```
webpack_encore:
    output_path: '%kernel.project_dir%/public/build/default'
    builds:
        mollie-admin: '%kernel.project_dir%/public/build/mollie-admin'
        mollie-shop: '%kernel.project_dir%/public/build/mollie-shop'
```

* Also make sure you have such configuration in your shop and admin views directory:

```Shop directory: 
in: src/Resources/views/Shop/_javascripts.html.twig:
<script src="https://js.mollie.com/v1/mollie.js"></script>
{{ encore_entry_script_tags('shop-entry', null, 'mollie-shop') }}
{{ encore_entry_script_tags('plugin-shop-entry', null, 'mollie-shop') }}

in: src/Resources/views/Shop/_stylesheets.html.twig:
{{ encore_entry_link_tags('shop-entry', null, 'mollie-shop') }}
{{ encore_entry_link_tags('plugin-shop-entry', null, 'mollie-shop') }}
```
```Admin directory: 
in: src/Resources/views/Admin/_javascripts.html.twig:
{{ encore_entry_script_tags('admin-entry', null, 'mollie-admin') }}
{{ encore_entry_script_tags('plugin-admin-entry', null, 'mollie-admin') }}

in: src/Resources/views/Admin/_stylesheets.html.twig:
{{ encore_entry_link_tags('admin-entry', null, 'mollie-admin') }}
{{ encore_entry_link_tags('plugin-admin-entry', null, 'mollie-admin') }}

```


### Frontend

#### Starting server and building assets

* Go to `./tests/Application/` directory
* Run `symfony server:start` in terminal. It will start local server.
* Run `yarn watch` in terminal. It will watch your changes in admin and shop catalogs: 
  `../../src/Resources/assets/admin/..`, `../../src/Resources/assets/shop/..`
* Run `yarn dev` in terminal to build your assets once in development mode.
* Run `yarn encore production` in terminal, to build your assets once in production mode - its required before creating every Pull Request.
* All assets (mollie assets + sylius base assets) will be build in:
```
tests/application/public/build/mollie-admin/..
tests/application/public/build/mollie-shop/..
```


#### Rebuilding assets in your root/SRC directory

* `bin/console assets:install`


#### CSS & JS files directory you can edit and work with:

* Admin: go to `./src/Resources/assets/admin/**/`
* Shop: go to `./src/Resources/assets/shop/**/`


## Testing

```
$ bin/behat
$ bin/phpspec run
```

## Community
----
For online communication, we invite you to chat with us & other users on [Sylius Slack](https://sylius-devs.slack.com/).


## Additional resources for developers
---
To learn more about our contribution workflow and more, we encourage you to use the following resources:
* [Sylius Documentation](https://docs.sylius.com/en/latest/)
* [Sylius Contribution Guide](https://docs.sylius.com/en/latest/contributing/)
* [Sylius Online Course](https://sylius.com/online-course/)

## License
 ---

This plugin's source code is completely free and released under the terms of the MIT license.

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen.)

## Contact
---
If you want to contact us, the best way is to fill the form on [our website](https://www.mollie.com/en/contact/merchants) or send us an e-mail to support@mollie.com with your question(s). We guarantee that we answer as soon as we can!

Plugin was originally developed by BitBag
