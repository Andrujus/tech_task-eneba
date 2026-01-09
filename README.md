# tech_task-eneba
<p align="center">
    <img width="720" height="405" alt="eneba" src="https://github.com/user-attachments/assets/897bbaa2-5fe6-4450-9e58-0788837c8ba1" />
</p>

## Summary

This repository contains a technical task implementation showcasing a complete web application with a clear separation between frontend and backend. The project focuses on demonstrating sound software engineering practices, including structured project organization, API-based communication, and data management. It is intended as a practical example of building, running, and extending a modern web application in a development environment.

## Deployed Website

<a href='https://sunny-kangaroo-3f36ad.netlify.app/'>Check the website here!</a>

## Demo
<p align="center">
  <img src="Demo.gif" />
</p>

### References

[Program Startup](#program-startup)\
[Database Documentation](#database)\
[Back-end Documentation](#back-end)\
[Front-end Documentation](#front-end)

### File structure
```sh
.
├── back-end
│   ├── data_json
│   │   └── games.json
│   ├── public
│   │   ├── acc_images
│   │   └── images
│   ├── .env
│   ├── database.sql
│   ├── db.js
│   ├── helper.js
│   ├── nodemon.json
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
├── front-end
│   ├── public
│   │   ├── .DS_Store
│   │   ├── eneba.png
│   │   └── eneba1.png
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── css
│   │   ├── pages
│   │   ├── .DS_Store
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   └── vite.config.js
├── .gitignore
├── AI_prompts.txt
└── README.md
```

## Program Startup
### Initial Setup

- Clone the GitHub repository
```sh
git clone https://github.com/Andrujus/tech_task-eneba.git
cd tech_task-eneba
```

### Database Setup

1. Create a PostgreSQL database
```sql
CREATE DATABASE tech_task_eneba;
```
2. Configure Database connections variables in `back-end/db.js`
```js
const pool = new Pool({
    user: "USERNAME",
    password: "PASSWORD",
    host: "localhost",
    port: 5432,
    database: "enebatechtask"
});
```
Now, proceed to the back-end setup.
### Back-end Setup

1. Navigate to the back-end directory `cd back-end`
2. Install dependencies
```sh
npm install
```
3. Start the back-end server
```sh
node server.js
```
After that, open a new terminal and proceed to the front-end setup.

### Front-end Setup

1. Navigate to the front-end directory `cd front-end`
2. Install dependencies
```sh
npm install
```
3. Start the front-end website
```sh
npm run dev
```
4. Press the localhost link, and you're good to go!

## Database

### Introduction

This project uses a PostgreSQL database, which is used by the back-end to store, retrieve, and manage application data.

### Structure

#### Game
| Field | Type | Desc |
| --- | --- | --- |
| GameId | int | Serial Primary Key |
| UserId | int | Foreign Key |
| GameTitle | VARCHAR | Game Title |
| GameRegion | VARCHAR | Region displayed in the Game Card |
| GamePrice | FLOAT | Game price displayed in the Game Card |
| Platform | VARCHAR | Platform for future development (Filter by platform) |
| ImageUrl | VARCHAR | Image URL which is stored in the back-end |
| IsFavorite | Boolean | Sets Game's favorite status |

#### User

| Field | Type | Desc |
| --- | --- | --- |
| UserId | int | Serial Primary Key |
| Username | VARCHAR | User's name |
| Email | VARCHAR | User's email address |
| PasswordHash | VARCHAR | User's Hashed Password |
| ImageUrl | VARCHAR | Image URL which is stored in the back-end |

#### Entity Relation Diagram
<img width="640" height="480" alt="Untitled Diagram drawio (1)" src="https://github.com/user-attachments/assets/84083a24-7bfe-46e7-a46c-af7493d23a36" />


## Back-end

### Introduction

The back-end handles application logic, data management, and API communication between the client and the database.

### File Structure
```sh
.
├── data_json
│   └── games.json
├── public
│   ├── acc_images
│   │   └── andrujus.jpeg
│   └── images
│       ├── fifa-23.png
│       ├── rdr-2.png
│       └── split-fiction.png
├── .env
├── database.sql
├── db.js
├── helper.js
├── nodemon.json
├── package-lock.json
├── package.json
└── server.js
```

### API Endpoints
| Method | Endpoint | Description |
| --- | --- | --- |
| GET | "/" | Health check |
| GET | "/api/list" | Lists all games from the DB |
| GET | "/api/user_list" | Lists all users from the DB |
| GET | "/api/list/search/:query" | Initializes fuzzy search |
| PATCH | "api/list/:id | Toggles "IsFavorite" to true or false |

## Front-end

### Introduction
The front-end provides the user interface for the application and communicates with the back-end API to display and update data. It is organized into reusable components and page-level views to keep the UI modular and maintainable.

### File Structure
```sh
.
├── public
│   ├── .DS_Store
│   ├── eneba.png
│   └── eneba1.png
├── src
│   ├── assets
│   ├── components
│   │   ├── game-card.jsx
│   │   └── Navbar.jsx
│   ├── css
│   │   ├── account.css
│   │   ├── game-card.css
│   │   ├── home.css
│   │   └── navbar.css
│   ├── pages
│   │   ├── account.jsx
│   │   ├── favorite.jsx
│   │   ├── game.jsx
│   │   └── home.jsx
│   ├── .DS_Store
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

### Styling
Styling is implemented using plain CSS and is organized under `src/css/`. Each page and reusable UI element has its own stylesheet (e.g., `home.css`, `navbar.css`, `game-card.css`) to keep styles modular, readable, and easy to maintain.
#### Colors
The colors used are:
- `#5116D0`
- `#4518AD`
- `#20094D`

## Tools Used

### Development

Front-end framework: `React`\
Back-end Framework: `ExpressJS`\
Database: `PostreSQL`\
Fuzzy Search: `Fuse` package

### Deployment

Database: `Supabase`\
Back-end Server: `Render`\
Front-end: `Netlify`
