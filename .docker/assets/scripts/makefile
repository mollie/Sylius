.PHONY: help
.DEFAULT_GOAL := help

PHP_VERSION_CURRENT=$(shell php -r 'echo PHP_MAJOR_VERSION.".".PHP_MINOR_VERSION;')
XDEBUG_STATUS=$(shell php -r 'echo (int)extension_loaded("xdebug");')
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

status: ## status infos
	sh /var/www/scripts/bin/status.sh

xdebug-on: ## enables xdebug
	sh /var/www/scripts/bin/xdebug_enable.sh

xdebug-off: ## disables xdebug
	sh /var/www/scripts/bin/xdebug_disable.sh

sylius-install: ## disables xdebug
	sh /var/www/scripts/bin/sylius_install.sh

restart-php: ## Restarts FPM and Apache2
	sudo service php$(PHP_VERSION_CURRENT)-fpm stop
	sudo service php$(PHP_VERSION_CURRENT)-fpm start
	@# ------------------------------------------------------
	sudo service apache2 restart

switch-php: ## Switches to another supported PHP version, [make switch-php version=7.4]
ifndef version
	$(warning Provide the required PHP version using "make switch-php version=x.y")
	@exit 1;
else
	@# ATTENTION, keep this steps exactly like they are. they ensure that its fail-fast
	@# non existing PHP versions will do nothing, switching to the same php version will also work
	@# ---------------------------------------------------------------------------------------
	@# Start new PHP to see if its existing, then stop current one, and if we use the same php version that
	@# is currently used, just make sure to start it again ;)
	sudo service php$(version)-fpm start
	sudo service php$(PHP_VERSION_CURRENT)-fpm stop
	sudo service php$(version)-fpm start
	export PHP_VERSION=$(version)
	@# ---------------------------------------------------------------------------------------
	@# if that all worked, switch the apache config now...that avoids breaking the files
	@# pipe the first command to dev/null to avoid ugly warnings in entrypoint boot script if old placeholder does not exist anymore
	sudo sed -i 's/__mollie_php_version__/'$(version)'/g' /etc/apache2/sites-enabled/000-default.conf 2>/dev/null
	sudo sed -i 's/'php$(PHP_VERSION_CURRENT)-fpm.sock'/'php$(version)-fpm.sock'/g' /etc/apache2/sites-enabled/000-default.conf
	sudo service apache2 restart
	@# ---------------------------------------------------------------------------------------
	@# last but not least update php for cli -> this is used for our variable in here
	sudo update-alternatives --set php /usr/bin/php$(version)
	@# ---------------------------------------------------------------------------------------
ifeq ($(XDEBUG_STATUS),1)
	make xdebug-on
else
	make xdebug-off
endif
	@# ---------------------------------------------------------------------------------------
	php -v
endif

