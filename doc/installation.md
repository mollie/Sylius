## Installation

1.Require with composer

```bash
$ composer require bitbag/mollie-plugin
```
2.Add traits to your GatewayConfig entity class, when You don't use annotation. 

```php
<?php

declare(strict_types=1);

namespace App\Entity\Payment;

use BitBag\SyliusMolliePlugin\Entity\GatewayConfigInterface;
use BitBag\SyliusMolliePlugin\Entity\GatewayConfigTrait;
use Doctrine\Common\Collections\ArrayCollection;
use Sylius\Bundle\PayumBundle\Model\GatewayConfig as BaseGatewayConfig;

class GatewayConfig extends BaseGatewayConfig implements GatewayConfigInterface
{
    use GatewayConfigTrait;

    public function __construct()
    {
        parent::__construct();

        $this->mollieGatewayConfig = new ArrayCollection();
    }
}
```

Or this way if you use annotations:
```php
<?php

declare(strict_types=1);

namespace App\Entity\Payment;

use Doctrine\ORM\Mapping as ORM;
use BitBag\SyliusMolliePlugin\Entity\GatewayConfigInterface;
use BitBag\SyliusMolliePlugin\Entity\GatewayConfigTrait;
use Doctrine\Common\Collections\ArrayCollection;
use Sylius\Bundle\PayumBundle\Model\GatewayConfig as BaseGatewayConfig;

/**
 * @ORM\Entity
 * @ORM\Table(name="sylius_gateway_config")
 */
class GatewayConfig extends BaseGatewayConfig implements GatewayConfigInterface
{
    use GatewayConfigTrait;

    /**
     * @var ArrayCollection
     * @ORM\OneToMany(
     *     targetEntity="BitBag\SyliusMolliePlugin\Entity\MollieGatewayConfig",
     *     mappedBy="gateway",
     *     orphanRemoval=true,
     *     cascade={"all"}
     * )
     */
    protected $mollieGatewayConfig;

    public function __construct()
    {
        parent::__construct();

        $this->mollieGatewayConfig = new ArrayCollection();
    }
}
````
You can find an example under the [tests/Application/src/Entity/*](/tests/Application/src/Entity/) path.

If you don't use annotations, define new Entity mapping inside your `src/Resources/config/doctrine` directory.
```xml
<?xml version="1.0" encoding="UTF-8"?>

<doctrine-mapping xmlns="http://doctrine-project.org/schemas/orm/doctrine-mapping"
                  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                  xsi:schemaLocation="http://doctrine-project.org/schemas/orm/doctrine-mapping
                  http://doctrine-project.org/schemas/orm/doctrine-mapping.xsd"
>
    <mapped-superclass name="App\Entity\Payment\GatewayConfig" table="sylius_gateway_config">
        <one-to-many field="mollieGatewayConfig" target-entity="BitBag\SyliusMolliePlugin\Entity\MollieGatewayConfig" mapped-by="gateway" orphan-removal="true">
            <cascade>
                <cascade-all />
            </cascade>
        </one-to-many>
    </mapped-superclass>
</doctrine-mapping>
```
For an example, check [tests/Application/src/Resources/config/doctrine/GatewayConfig.orm.xml](/tests/Application/src/Resources/config/doctrine/GatewayConfig.orm.xml) file.

Override GatewayConfig resource:

```yaml
# config/packages/_sylius.yaml
...

sylius_payum:
    resources:
        gateway_config:
          classes:
              model: App\Entity\Payment\GatewayConfig
```

3.Add traits to your Order entity class, when You don't use annotation.

```php
<?php

declare(strict_types=1);

namespace App\Entity\Order;

use BitBag\SyliusMolliePlugin\Entity\OrderInterface;
use BitBag\SyliusMolliePlugin\Entity\OrderTrait;

use Sylius\Component\Core\Model\Order as BaseOrder;

class Order extends BaseOrder implements OrderInterface
{
    use OrderTrait;
}
```
Or this way if you use annotations:

```php
<?php

declare(strict_types=1);

namespace App\Entity\Order;

use Doctrine\ORM\Mapping as ORM;
use BitBag\SyliusMolliePlugin\Entity\OrderInterface;
use BitBag\SyliusMolliePlugin\Entity\OrderTrait;

use Sylius\Component\Core\Model\Order as BaseOrder;

/**
 * @ORM\Entity
 * @ORM\Table(name="sylius_order")
 */
class Order extends BaseOrder implements OrderInterface
{
    use OrderTrait;

    /**
     * @var bool
     * @ORM\Column(type="boolean")
     */
    protected  $abandonedEmail = false;
}
```


If you don't use annotations, define new Entity mapping inside your src/Resources/config/doctrine directory.

```xml
<?xml version="1.0" encoding="UTF-8"?>

<doctrine-mapping xmlns="http://doctrine-project.org/schemas/orm/doctrine-mapping"
                  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                  xsi:schemaLocation="http://doctrine-project.org/schemas/orm/doctrine-mapping
                  http://doctrine-project.org/schemas/orm/doctrine-mapping.xsd"
>
    <mapped-superclass name="App\Entity\Order\Order" table="sylius_order">
        <field name="abandonedEmail" type="boolean" column="abandoned_email"/>
    </mapped-superclass>
</doctrine-mapping>

```
Override Order resource:

```yaml
# config/packages/_sylius.yaml
...

sylius_order:
    resources:
        order:
            classes:
                model: App\Entity\Order\Order
```

4.Add traits to your Product entity class, when You don't use annotation.

```php
<?php

declare(strict_types=1);

namespace App\Entity\Product;

use BitBag\SyliusMolliePlugin\Entity\ProductInterface;
use BitBag\SyliusMolliePlugin\Entity\ProductTrait;
use Sylius\Component\Core\Model\Product as BaseProduct;

class Product extends BaseProduct implements ProductInterface
{
    use ProductTrait;
}

```
Or this way if you use annotations:

```php
<?php

declare(strict_types=1);

namespace App\Entity\Product;

use Doctrine\ORM\Mapping as ORM;
use BitBag\SyliusMolliePlugin\Entity\ProductInterface;
use BitBag\SyliusMolliePlugin\Entity\ProductTrait;
use Sylius\Component\Core\Model\Product as BaseProduct;

/**
 * @ORM\Entity
 * @ORM\Table(name="sylius_product")
 */
class Product extends BaseProduct implements ProductInterface
{
    use ProductTrait;

    /**
     * @ORM\ManyToOne(targetEntity="BitBag\SyliusMolliePlugin\Entity\ProductType", inversedBy="productType")
     * @ORM\JoinColumn(name="product_type_id", onDelete="SET NULL")
     */
    protected $productType;
}
```

If you don't use annotations, define new Entity mapping inside your src/Resources/config/doctrine directory.

```xml
<?xml version="1.0" encoding="UTF-8" ?>

<doctrine-mapping xmlns="http://doctrine-project.org/schemas/orm/doctrine-mapping"
                  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                  xsi:schemaLocation="http://doctrine-project.org/schemas/orm/doctrine-mapping
                                  http://doctrine-project.org/schemas/orm/doctrine-mapping.xsd"
                  xmlns:gedmo="http://gediminasm.org/schemas/orm/doctrine-extensions-mapping"
>
    <entity name="App\Entity\Product\Product" table="sylius_product">
        <many-to-one
            field="productType"
            target-entity="BitBag\SyliusMolliePlugin\Entity\ProductType"
        >
            <join-column
                name="product_type_id"
                on-delete="SET NULL"
            />
        </many-to-one>
    </entity>
</doctrine-mapping>
```
Override Order resource:

```yaml
# config/packages/_sylius.yaml
...

sylius_product:
        resources:
            product:
                classes:
                    model: App\Entity\Product\Product
```


5.Add plugin dependencies to your `config/bundles.php` file:

```php
return [
    ...
    BitBag\SyliusMolliePlugin\BitBagSyliusMolliePlugin::class => ['all' => true],
];
```

6.Import required config in your `config/packages/_sylius.yaml` file:

```yaml
# config/packages/_sylius.yaml

imports:
    ...
    - { resource: "@BitBagSyliusMolliePlugin/Resources/config/config.yaml" }
```

7.Import the routing in your `config/routes.yaml` file:

```yaml
# config/routes.yaml

bitbag_sylius_mollie_plugin:
    resource: "@BitBagSyliusMolliePlugin/Resources/config/routing.yaml"
```

8.Add image dir parameter in `config/pacakges/_sylius.yaml`

```yaml
# config/pacakges/_sylius.yaml

   parameters:
       images_dir: "/media/image/"
``` 

9.Update your database

Copy migrations of the RefundPlugin used by this MolliePlugin

```bash
cp -R vendor/sylius/refund-plugin/migrations/* src/Migrations
```

Copy migrations of the MolliePlugin

```
cp -R vendor/bitbag/mollie-plugin/migrations/* src/Migrations
```

Run migrations
```
bin/console doctrine:migrations:migrate
```

10.Copy Sylius templates overridden in plugin to your templates directory (e.g templates/bundles/):

```
mkdir -p templates/bundles/SyliusAdminBundle/
mkdir -p templates/bundles/SyliusShopBundle/

cp -R vendor/bitbag/mollie-plugin/src/Resources/views/SyliusAdminBundle/* templates/bundles/SyliusAdminBundle/
cp -R vendor/bitbag/mollie-plugin/src/Resources/views/SyliusShopBundle/* templates/bundles/SyliusShopBundle/
```

11.Install assets

```
bin/console assets:install
```

12.(optional) if you don't use `symfony/messenger` component yet, it is required to configure default message bus:

```yaml
    framework:
        messenger:
            default_bus: sylius_refund_plugin.command_bus
```

**Note:** If you are running it on production, add the `-e prod` flag to this command.


13.On abandoned payment link to run it on CLI we need to add a script e.g cron. Example here:

```shell script
* * * * * /var/www/mollie/scripts/payment-link.sh

/usr/bin/php /var/www/mollie/bin/console mollie:send-payment-link
```

14. Add state machine configuration in `_sylius.yaml`
```yaml
# config/packages/_sylius.yaml

winzou_state_machine:
  sylius_order_checkout:
    transitions:
      complete:
        from: [payment_selected, payment_skipped, addressed, shipping_skipped, payment_selected, cart]
        to: completed
```

15. Download the [domain validation file](https://www.mollie.com/.well-known/apple-developer-merchantid-domain-association) and place it on your server at
`public/.well-known/apple-developer-merchantid-domain-association`
    
    
