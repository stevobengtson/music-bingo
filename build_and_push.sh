#!/bin/bash

version=1.0.4

echo "Building containers..."
echo "Building web..."
docker build -t stevobengtson/music-bingo-web:$version ./web
echo "Building api..."
docker build -t stevobengtson/music-bingo-api:$version ./api

echo "Tagging containers to latest..."
echo "Tagging web container to latest..."
docker tag stevobengtson/music-bingo-web:$version stevobengtson/music-bingo-web:latest
echo "Tagging api container to latest..."
docker tag stevobengtson/music-bingo-api:$version stevobengtson/music-bingo-api:latest

echo "Pushing containers to docker hub..."
echo "Pushing web container to docker hub..."
docker push stevobengtson/music-bingo-web:latest
echo "Pushing api container to docker hub..."
docker push stevobengtson/music-bingo-api:latest

echo "Complete"
