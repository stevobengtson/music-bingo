#!/usr/bin/env bash

docker-compose exec api bundle exec rake db:setup db:migrate
