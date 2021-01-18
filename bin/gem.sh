#!/usr/bin/env bash

if [ $# -eq 0 ]; then
    set -- "install"
fi

docker-compose exec api bundle "$@"
