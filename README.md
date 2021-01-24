# Setup Docker Environment

1. Install docker desktop for your environment:
    - [Docker Desktop](https://www.docker.com/products/docker-desktop)
1. Setup environment and security:
    - Create a .env file with the following:

        ```bash
        MYSQL_ROOT_PASSWORD=music_bingo_root_password
        MYSQL_DATABASE=music_bingo
        MYSQL_USER=music_bingo_user
        MYSQL_PASSWORD=music_bingo_password
        DATABASE_CLEANER_ALLOW_REMOTE_DATABASE_URL=true
        RAILS_ENV=development
        ```
1. Start up application:
    - Start the docker containers: `$ docker-compose up -d`
        - You can see the logs of each system with `$ docker-compose logs -f [api|db|web]`
        - You can also see the status of the system with `$ docker-compose ps -a`
    - Setup the Web applicaton
        - `$ docker-compose exec web npm install`
    - Setup the Api application
        - `$ docker-compose exec api bundle install`
    - Setup the database
        - `$ docker-compose exec api rails db:setup`
        - `$ docker-compose exec api rails db:migrate`
