#!/bin/sh

set -e

if [ -f tmp/pids/server.pid ]; then
  rm tmp/pids/server.pid
fi

bundle install  --jobs 20 --retry 5 --with development test
rails server -b 0.0.0.0
