#!/bin/bash

version=1.0.4

docker build -t stevobengtson/music-bingo-web:$version ./web
docker build -t stevobengtson/music-bingo-api:$version ./api

docker tag stevobengtson/music-bingo-web:$version stevobengtson/music-bingo-web:latest
docker tag stevobengtson/music-bingo-api:$version stevobengtson/music-bingo-api:latest

docker push stevobengtson/music-bingo-web:latest
docker push stevobengtson/music-bingo-api:latest
