# How to run locally

## Setup and run application

1. Install MySQL
2. Install ruby
3. Install Node

## Run the Rails API Server

- Navigate to the API folder `cd api`
- Run the command `rails s`
    > You can use `-b 0.0.0.0` is to bind to all interfaces so it is available externally as well.

## Run the Angular Front end

> You may have to change the `web/src/assets/settings.json` file in order to properly connect to the API. Set the `baseApiUrl` value to the destination of the API server. It should always have `/api` as the last part of the url.

- Navigate to the web folder `cd web`
- Run the command `npm start`
    > You can use `--host 0.0.0.0 --disable-host-check` to bind to all interfaces so it is available externally as well.