FROM php:fpm

RUN apt-get update && apt-get install -y \
    git \
    zip \
    unzip \
    gnupg \
    g++ \
    procps \
    openssl \
    git \
    unzip \
    zlib1g-dev \
    libzip-dev \
    libfreetype6-dev \
    libpng-dev \
    libjpeg-dev \
    libicu-dev  \
    libonig-dev \
    libxslt1-dev \
    acl

RUN docker-php-ext-configure gd --with-jpeg --with-freetype

RUN docker-php-ext-install pdo pdo_mysql zip xsl gd intl opcache exif mbstring

RUN curl -sS https://get.symfony.com/cli/installer | bash; \
    mv /root/.symfony/bin/symfony /usr/local/bin/symfony

COPY --from=composer /usr/bin/composer /usr/bin/composer

WORKDIR /var/www

COPY . /var/www

RUN composer install

CMD symfony server:start
