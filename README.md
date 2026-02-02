# Notes Management API

A clean and minimal REST API for managing notes, built with Node.js, Express, TypeScript, PostgreSQL, and Prisma ORM. This project is designed to be simple, readable, and ideal for workshops or study.

## Tech Stack
- **Backend:** Node.js, Express
- **Language:** TypeScript
- **Database:** PostgreSQL
- **ORM:** Prisma

## Project Structure
```
notes-api/
├── prisma/
│   └── schema.prisma         # Database schema
├── src/
│   ├── app.ts                # Express app configuration
│   ├── server.ts             # Server entry point
│   ├── controllers/
│   │   └── note.controller.ts # Route logic (OOP)
│   ├── routes/
│   │   └── note.routes.ts     # API route definitions
│   ├── interfaces/
│   │   └── note.interface.ts  # TypeScript types
│   └── utils/
│       └── errorHandler.ts    # Global error handling
├── .env                      # Environment variables
└── package.json              # Project dependencies & scripts
```

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Update the `.env` file with your PostgreSQL connection string:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/notes_db?schema=public"
PORT=3000
```

### 3. Run Database Migrations
Create your database tables using Prisma:
```bash
npm run prisma:migrate
```

### 4. Start the Server
Run the development server with nodemon:
```bash
npm run dev
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | `/notes` | Create a new note |
| GET    | `/notes` | Get all notes |
| GET    | `/notes/:id` | Get a single note by ID |
| PUT    | `/notes/:id` | Update a note by ID |
| DELETE | `/notes/:id` | Delete a note by ID |

## License
ISC
