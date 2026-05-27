# ITSTEP Connect Fullstack Project

## Описание проекта

ITSTEP Connect — это fullstack платформа для студентов ITSTEP.

Проект включает:
- frontend на React;
- backend на Go + Gin;
- PostgreSQL базу данных;
- MongoDB NoSQL базу данных;
- REST API;
- авторизацию;
- CRUD операции;
- социальный функционал.

Пользователи могут:
- регистрироваться и входить;
- создавать посты;
- просматривать новости;
- вступать в клубы;
- добавлять друзей;
- просматривать профиль;
- отправлять сообщения.

---

# Используемые технологии

## Frontend
- React
- React Router DOM
- Material UI
- Context API
- Axios
- Vite

## Backend
- Go
- Gin Framework
- GORM
- JWT Authentication

## SQL база данных
- PostgreSQL
- pgAdmin

## NoSQL база данных
- MongoDB Atlas

## Тестирование API
- Thunder Client

## Проектирование
- Figma
- dbdiagram.io

---

# Архитектура проекта

## Frontend

Frontend содержит:
- pages;
- components;
- context;
- routing;
- API requests.

Основные страницы:
- Login
- Register
- Posts
- Profile
- Friends
- Clubs
- News
- Admin

---

## Backend

Backend построен на REST API архитектуре.

Реализованные endpoints:
- /register
- /login
- /posts
- /clubs
- /news
- /messages

Реализованный функционал:
- CRUD операции;
- middleware;
- JWT авторизация;
- PostgreSQL подключение;
- MongoDB подключение.

---

# SQL база данных

PostgreSQL используется для структурированных данных.

Таблицы:
- users
- posts
- clubs
- news
- comments
- friends
- club_members

В SQL хранятся:
- пользователи;
- посты;
- клубы;
- друзья;
- новости;
- связи между сущностями.

---

# NoSQL база данных

MongoDB Atlas используется для хранения сообщений.

Коллекция:
- messages

В MongoDB хранятся:
- sender_id
- receiver_id
- text
- created_at

MongoDB используется потому что сообщения являются гибкими данными и не требуют сложной реляционной структуры.

---

# ERD структура

Связи:
- один пользователь может создавать много постов;
- один пост может содержать много комментариев;
- один пользователь может иметь много друзей;
- один клуб может содержать много участников.

---

# Примеры API

## SQL API

GET /posts

POST /posts

GET /clubs

GET /news

## NoSQL API

GET /messages

POST /messages

---

# Авторизация

Авторизация реализована через JWT токены.

Пользователь может:
- зарегистрироваться;
- войти в систему;
- получать доступ к защищённым routes.

---

# Скриншоты

В проекте присутствуют скриншоты:
- PostgreSQL таблиц;
- ERD диаграммы;
- MongoDB Atlas;
- Thunder Client запросов;
- frontend страниц;
- backend сервера.

---

# Авторы

- Edil
- Beknazar

---

# Итог

Проект демонстрирует:
- fullstack разработку;
- интеграцию frontend и backend;
- работу SQL и NoSQL баз данных;
- REST API архитектуру;
- JWT авторизацию;
- CRUD функциональность;
- проектирование баз данных и ERD.
