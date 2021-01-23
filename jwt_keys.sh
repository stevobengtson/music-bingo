#!/usr/bin/env bash

source ./.env
echo "pass phrase: ${JWT_PASSPHRASE}"

mkdir -p ./php-fpm/config/jwt
openssl genpkey -out ./php-fpm/config/jwt/private.pem -aes256 -algorithm rsa -pkeyopt rsa_keygen_bits:4096
openssl pkey -in ./php-fpm/config/jwt/private.pem -out ./php-fpm/config/jwt/public.pem -pubout
