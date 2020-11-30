# How to run locally

## Docker Setup

1. Install Docker Desktop for Windows/Mac
2. Run `docker-compose up -d` in the root folder of the project
3. Run `docker-compose exec api bundle exec rake db:setup db:migrate` to build the database

Access the API at http://localhost:3000/api
 /categories
 /clips
 /games

Access the WebSite at http://localhost:4200

## Manual Setup
### Setup and run application

1. Install Postgresql
2. Install ruby on rails
3. Install Node

### Run the Rails API Server

Install gems:

- `bundle install`

- Navigate to the API folder `cd api`
- Run the command `rails s`
    > You can use `-b 0.0.0.0` is to bind to all interfaces so it is available externally as well.

### Run the Angular Front end

> You may have to change the `web/src/assets/settings.json` file in order to properly connect to the API. Set the `baseApiUrl` value to the destination of the API server. It should always have `/api` as the last part of the url.

Install angular:

- `npm install -g @angular/cli`
- `npm install`

- Navigate to the web folder `cd web`
- Run the command `npm start`
    > You can use `--host 0.0.0.0 --disable-host-check` to bind to all interfaces so it is available externally as well.
