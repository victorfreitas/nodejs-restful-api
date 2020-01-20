# NodeJS Restful API

## Installation

1. **Download project**

```sh
git clone git@github.com:victorfreitas/nodejs-restful-api.git
cd nodejs-restful-api
```

1. **Install dependencies**

```sh
cp .env.example .env
npm install
```

## Development Mode

```sh
npm start
```

## Deploy

```sh
npm run build
```

## Endpoint /users

| NAME | METHOD | ROUTE |
| ------ | ------ | ------ |
| Register user | POST | api/users/register |
| Login | POST | api/users/login |
| Current user | GET | api/users/current |

## Endpoint /posts

| NAME | METHOD | ROUTE |
| ------ | ------ | ------ |
| Get posts | GET | api/posts |
| Create posts | POST | api/posts |
| Get post by id | GET | api/posts/:id |
| Delete post | DELETE | api/posts/:id |
| Like post | POST | api/posts/:id/like |
| Unlike post | POST | api/posts/:id/unlike |
| Add comment | POST | api/posts/:id/comment |
| Delete comment | DELETE | api/posts/:id/comment |
