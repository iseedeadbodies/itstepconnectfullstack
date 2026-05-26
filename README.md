# ITSTEP Connect

ITSTEP Connect — fullstack web-приложение для студентов колледжа.

Проект создан для того, чтобы студенты могли смотреть новости, клубы, посты, искать информацию и пользоваться навигацией по активности колледжа.

## Технологии

### Frontend
- React
- Vite
- React Router
- Context API
- Material UI
- Axios

### Backend
- Go
- Gin Framework
- GORM
- JWT Authentication

### Database
- PostgreSQL

## Функции проекта

- регистрация пользователя
- вход пользователя
- профиль пользователя
- лента постов
- клубы и кружки
- новости колледжа
- поиск
- друзья
- навигация для студентов
- админ-панель
- REST API
- JWT middleware
- CRUD операции

## Frontend архитектура

Frontend разделён на:

- `api` — работа с backend API
- `context` — глобальное состояние приложения
- `components` — переиспользуемые UI-компоненты
- `pages` — отдельные страницы приложения

Навигация реализована через React Router.

Основные страницы:

- `/login`
- `/register`
- `/profile`
- `/posts`
- `/clubs`
- `/news`
- `/friends`
- `/search`
- `/navigation`
- `/admin`

## State Management

Для управления состоянием используется Context API.

В глобальном состоянии хранятся:

- пользователь
- токен
- посты
- клубы
- новости
- друзья
- поиск
- loading
- error

Также используются React hooks:

- `useState`
- `useEffect`
- `useContext`

## UI Library

Для интерфейса используется Material UI.

Material UI был выбран потому что:
- даёт готовые компоненты;
- ускоряет разработку;
- помогает сделать единый стиль приложения;
- содержит удобные Button, Card, TextField, Alert и Typography.

## Backend архитектура

Backend разделён на:

- `config`
- `controllers`
- `models`
- `routes`
- `middleware`

Gin используется для роутинга и обработки HTTP-запросов.

GORM используется для работы с PostgreSQL.

## REST API

### Auth
- `POST /register`
- `POST /login`

### Posts
- `GET /posts`
- `POST /posts`
- `PUT /posts/:id`
- `DELETE /posts/:id`

### Clubs
- `GET /clubs`
- `POST /clubs`
- `PUT /clubs/:id`
- `DELETE /clubs/:id`

### News
- `GET /news`
- `POST /news`
- `PUT /news/:id`
- `DELETE /news/:id`

## Database

В PostgreSQL используются таблицы:

- users
- posts
- clubs
- news

## SQL / NoSQL

PostgreSQL используется для структурированных данных:

- пользователи
- посты
- клубы
- новости

NoSQL часть можно использовать для:

- сообщений
- уведомлений
- логов активности
- realtime чатов

Такие данные могут быстро расти и иметь более гибкую структуру.

## ERD

Основные сущности:

- users
- posts
- clubs
- news
- comments
- messages
- friends

Связи:

- один пользователь может иметь много постов
- один пользователь может иметь много комментариев
- один пост может иметь много комментариев
- пользователи могут отправлять сообщения друг другу
- пользователь может состоять в клубах

## Запуск backend

```bash
cd backend
go run main.go
```

Backend запускается на:

```txt
http://localhost:8080
```

## Запуск frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend запускается на:

```txt
http://localhost:5173
```

## User Flow

```txt
Login / Register
↓
Profile
↓
Posts / Clubs / News
↓
Search / Navigation
↓
Admin Panel
```

## Что можно улучшить в будущем

- realtime chat через WebSocket
- полноценные личные сообщения
- система комментариев
- роли admin/student
- загрузка аватара
- полноценная модерация постов
- deployment backend на Railway
- deployment frontend на Vercel

## Авторы

Edil  
Beknazar
