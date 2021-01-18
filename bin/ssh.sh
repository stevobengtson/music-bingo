#!/usr/bin/env bash

if [ $# -eq 0 ]; then
    set -- "api"
fi

docker-compose exec "$1" sh
