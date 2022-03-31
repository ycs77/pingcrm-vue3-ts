# Ping CRM (Vue 3 Composition API x TS)

PingCRM Vue x TS：[Options API demo](https://github.com/ycs77/pingcrm-vue3-ts) | Composition API (`<script setup>`) demo

---

A demo application to illustrate how Inertia.js works.

![](https://raw.githubusercontent.com/inertiajs/pingcrm/master/screenshot.png)

## Installation

Clone the repo locally:

```sh
git clone https://github.com/ycs77/pingcrm-vue3-ts.git
cd pingcrm-vue3-ts
git checkout compsition-api
```

Install PHP dependencies:

```sh
composer install
```

Install NPM dependencies:

```sh
yarn install
```

Build assets:

```sh
yarn dev
```

Setup configuration:

```sh
cp .env.example .env
```

Generate application key:

```sh
php artisan key:generate
```

Create an SQLite database. You can also use another database (MySQL, Postgres), simply update your configuration accordingly.

```sh
touch database/database.sqlite
```

Run database migrations:

```sh
php artisan migrate
```

Run database seeder:

```sh
php artisan db:seed
```

Run the dev server (the output will give the address):

```sh
php artisan serve
```

Run the SSR server:

```sh
yarn ssr:serve
```

You're ready to go! Visit Ping CRM in your browser, and login with:

- **Username:** johndoe@example.com
- **Password:** secret

## Generate Models Type Declaration

To generate the Laravel models's type declaration file:

```sh
php artisan typescript:generate
```

## Running tests

To run the Ping CRM tests, run:

```
phpunit
```
