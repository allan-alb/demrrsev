# 💸 DemRRSev (Draft)

A simple full-stack web application built with **React Router v7** and **Prisma** (using SQLite) to register and display expenses. This is an early draft version focused on experimenting with routing and full-stack integration.

### 🧩 Project Features

- Register new expenses
- View a list of registered expenses
- Routing handled with React Router v7
- Persistent data storage using SQLite + Prisma

### 🛣️ React Router 7 Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## ▶️ Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Setup database

For this project's database we use [Turso](https://turso.tech/)
You need to create a database there and then set up `TURSO_DATABASE_URL` and `TURSO_AUTH_TOKEN` in `.env`

### Setup Prisma

```bash
npx prisma generate
npx prisma db push
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

---

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

## ⚠️ Notes

- This is an early **draft version**, not intended for production.
- Authentication, filtering, and editing/deleting expenses are not yet implemented.

## 📜 License

MIT

---

Built using React Router.
