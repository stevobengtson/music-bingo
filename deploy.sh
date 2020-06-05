#!/bin/bash

# Simple deploy script

# First deploy the rails application
echo "Deploying RoR application:"
pushd api
echo "  Copying RoR files..."
rsync -av * /var/www/music_bingo/api/ --exclude 'tmp' --exclude '.git' --exclude 'test' --exclude '*.paw' --exclude '*.md'
echo "  Restarting service..."
service puma-music_bingo restart
popd
echo "RoR deployment complete."

# Now deploy the front end
echo "Deploying Angular application:"
pushd web
echo "  Building to /var/www/music_bingo/web..."
ng build --prod --output-path /var/www/music_bingo/web/
echo "
{
    \"baseApiUrl\": \"/api\"
}" > /var/www/music_bingo/web/assets/settings.json
popd
echo "Angular deployment complete."
