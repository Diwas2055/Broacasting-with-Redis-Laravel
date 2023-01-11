## Broadcasting Laravel with Redis,Socket.io

- This is a simple example of broadcasting with Laravel and Redis
    - Laravel Version >= 5.6
    - PHP Version >= 7.2

> Requirements
- composer
- npm
- docker


> Installation
- Clone the repository
- Run `composer install`
- Run `npm install`
- Run `docker-compose up -d`

> Run the Application
- Run `cp .env.example .env`
    - Configure the .env file
- Run `php artisan serve`
- Run `npm run watch`
- Run `laravel-echo-server start`


### Note: If the .env variables are not set, the application will not work.if the env is not found the run the following command

```bash
composer dump-autoload --no-cache
php artisan cache:clear
php artisan config:clear
php artisan view:clear
```
