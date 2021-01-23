#!/usr/bin/env bash

docker-compose exec -w /var/www/ php-fpm composer "$@"
