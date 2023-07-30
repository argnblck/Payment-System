## Description

API на основе NesJS для платежной системы.\
Данные сохраняются с помощь Sequelize ORM в базе данных с использованием PostgreSQL.\
Аутентификация пользователей реализована с помощью passport.js.\
Пароли пользователей перед сохранением в базу данных хэшируются с помошь пакета bcryptjs.\
API описан с помошью swagger, документация swagger доступна по пути '/api/docs'.

Еще не реализовано:
  - Авторизация пользователей для управлением доступа к счетам.
  - Тесты.

## Installation

```bash
$ npm install
```

Так же необходимо создать файл для переменных среды с названием ".development.env" или ".production.env" с содержимым по примеру описаному в .sample.env

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## License

MIT
