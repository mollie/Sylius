cd "$APACHE_DOCROOT/../../../"
composer install
cd tests/Application/
composer install
php bin/console d:d:c --if-not-exists
php bin/console doctrine:schema:update -f
php bin/console sylius:fixtures:load -n
php bin/console assets:install
php bin/console sylius:install:assets
yarn install
yarn run gulp
yarn run build