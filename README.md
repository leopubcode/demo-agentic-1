# FullStack Template

A template to start a new monorepo project using TurboRepo, npm, React, Vite, TypeScript, Tailwind, React Router. Then on the backend, Node, Express, tRPC, and database is left out of the tech stack, just choose your own.

The core project currently exports a tRPC router, however it can be changed to simply export functions or classes that perform the business logic as a service layer. This core project can be imported into other node.js project. In this case, it is mainly used in the API app, which is a very basic Express API wrapper that exposes a tRPC server. However, it can also be used to create a GraphQL API, a WebSocket API, or REST API. It can also be imported into worker projects, scripts, or CLI or any type of Node project. You could choose to keep the core project just a service layer without coupling it with the tRPC layer, however I decided to keep things simple and made core export a tRPC router.

If you choose to use multiple clients, you can create your own component library and import it into multiple web apps. However, I did not add a components project since not all projects need them.

## Variants

Obviously every project is different so you might not need the exact template provided. Instead of trying to provide the perfect template you build your own from the available options below. Each of the options below is a branch off main with commits that add a specific piece to the project. You can simply rebase each of the branches into main to build your stack.

If you don't want to manage infrastructure and don't mind being vendor locked-in choose this. Perfect for personal projects or for building fast and you dont mind paying a premium when you need to scale:

- Lambda API runtime -> DynamoDB -> SQS + Lambda worker -> S3 storage -> AWS Cognito -> AWS Secret Manager

If you want to build something that can scale but without being vendor locked-in and want to start small and on a budget go for:

- Docker Node.js API runtime -> Postgres (supabase) -> Sidequest (Postgres) worker -> S3 storage -> ECS infrastructure -> keycloak auth -> OpenBao

### APIs:

- tRPC (default)
- Apollo Server

### API Runtimes:

- Docker Node.js
- Lambda

### Databases:

- SQLite
- Postgres
- DynamoDB
- MongoDB
- Redis

### Workers:

- Sidequest
- SQS + Lambda
- SQS + Docker Node.js
- BullMQ + Docker Node.js

### Storage:

- S3
- Local files

### Infrastructure:

- Fly.io
- ECS

### Auth:

- Keycloak
- AWS Cognito
- Auth0

### Secret management:

- OpenBao
- AWS Secret Manager
- .env

## Getting started

```sh
npm run build:watch --workspace=@repo/utils
npm run build:watch --workspace=@repo/core
npm run build:watch --workspace=@repo/api
npm run dev --workspace=@repo/api
npm run dev --workspace=@repo/web
```
