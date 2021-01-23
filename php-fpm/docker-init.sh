#!/usr/bin/env bash

cd /var/www
composer install
curl -sS https://get.symfony.com/cli/installer | bash
mv /root/.symfony/bin/symfony /usr/local/bin/symfony
symfony server:start
