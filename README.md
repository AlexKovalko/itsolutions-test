# test-app

NestJS GraphQL API (цифровая визитка) с PostgreSQL и Prisma.

## Требования

- [Docker](https://docs.docker.com/get-docker/) и Docker Compose v2
- Node.js 24+ и [pnpm](https://pnpm.io/) — только для локальной разработки без контейнера приложения

## Переменные окружения

Скопируйте пример и при необходимости измените значения:

```bash
cp .env.example .env
```

| Переменная | Описание | Пример |
|---|---|---|
| `PORT` | Порт HTTP API | `3000` |
| `DB_URL` | URL PostgreSQL (логин, пароль и имя БД берутся из него) | `postgresql://postgres:postgres@postgres:5432/test_app` |

В Docker Compose хост БД — `postgres` (имя сервиса).

## Запуск (Docker)

```bash
docker compose up --build
```

При старте контейнер приложения:

1. ждёт готовности PostgreSQL;
2. применяет миграции (`prisma migrate deploy`);
3. заполняет БД сидами (`prisma db seed`);
4. запускает API.

Остановка:

```bash
docker compose down
```

Данные PostgreSQL сохраняются в volume `postgres_data`. Чтобы удалить и их:

```bash
docker compose down -v
```

## Доступ

После запуска:

- API: `http://localhost:3000`
- GraphQL (Apollo Sandbox): `http://localhost:3000/graphql`

Порт задаётся переменной `PORT` в `.env`.

## Полезные команды (локально)

Нужны Node.js 24+, pnpm и доступная БД (`DB_URL` в `.env` / `.env.local`).

```bash
pnpm install
pnpm generate          # prisma generate
pnpm migrate:dev       # миграции в режиме разработки
pnpm seed              # сиды
pnpm start:dev         # API с watch
pnpm test              # unit-тесты
pnpm test:e2e          # e2e
```
