## Doodle Frontend Challenge Submission

Hello! I'm Kasparas Morkunas and I'm glad to submit my code challenge messaging screen project.

Main technologies used:

- Project uses Next.js as a mostly front end framework
- Docker for dev environment
- Tanstack/React query and Axios for data fetching
- TailwindCSS for styling

## Environment setup

There are a cople of environment variables that will need to be set to connect to the challenge api. Either paste the environment variables shared in the application email in an `.env` file in the root directory or fill out the environment variables with the code challenge api information for these variables:

```
NEXT_PUBLIC_API_BASE_URL = https://example-url/api/v1/
NEXT_PUBLIC_BEARER_TOKEN = bearer-token
```

## Running the project

This is a Next.js project bootstrapped with create-next-app and a docker compose option set up. So you have two options:

### Option 1 Docker

#### Prerequisites

You will need to [have docker installed](https://docs.docker.com/)

1. Start project:

```
    docker compose up
```

2. To stop the services:

```
    docker compose down
```

Open [http://localhost:4000](http://localhost:4000) with your browser to view the project.

### Option 2 Local Development

This is a Next.js project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) so you can simply call `npm run dev` and the project wil be available either on [http://localhost:3000](http://localhost:3000) or [http://localhost:3001](http://localhost:3001) if the api server is running.
