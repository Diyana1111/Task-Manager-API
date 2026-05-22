# Task-Manager-API

Full Stack Internship Project 3 at DecodeLabs - A backend Task Manager API built with Node.js, Express.js and SQLite featuring CRUD operations, RESTful architecture and database integration.

---

## 📌 Project Overview

This project is a simple Task Management REST API developed during the DecodeLabs Full Stack Development Internship Program.

The API performs full CRUD operations using Node.js, Express.js and SQLite database integration for persistent data storage.

---

## 🚀 Features

- Get all tasks
- Get task by ID
- Add new task
- Update existing task
- Delete task
- SQLite database integration
- RESTful API structure
- Error handling
- Persistent data storage

---

## 🛠 Technologies Used

- Node.js
- Express.js
- SQLite
- JavaScript
- REST API
- Postman

---

## 📂 Project Structure

```txt
Task-Manager-API/
│
├── database/
│   ├── db.js
│   └── tasks.db
│
├── routes/
│   └── taskRoutes.js
│
├── node_modules/
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

---

## ▶️ How to Run the Project

### 1. Clone the repository

```bash
git clone <your-github-repository-link>
```

### 2. Open the project in VS Code

### 3. Install dependencies

```bash
npm install
```

### 4. Start the server

```bash
npm run dev
```

### 5. Test APIs using Postman

---

## 🌐 Base URL

```txt
http://localhost:5000/api/tasks
```

---

## 📌 API Endpoints

| Method | Endpoint       | Description    |
| ------ | -------------- | -------------- |
| GET    | /api/tasks     | Get all tasks  |
| GET    | /api/tasks/:id | Get task by ID |
| POST   | /api/tasks     | Add new task   |
| PUT    | /api/tasks/:id | Update task    |
| DELETE | /api/tasks/:id | Delete task    |

---

## 📥 Sample Task Object

```json
{
  "id": 1,
  "title": "Complete Project 3",
  "description": "Finish SQLite CRUD API",
  "completed": 0
}
```

---

## ✅ Status Codes Used

- 200 → Success
- 201 → Created Successfully
- 404 → Resource Not Found
- 500 → Internal Server Error

---

## 👩‍💻 Author

**Diyana Jayasekara**

---

## 📚 Internship Program

DecodeLabs Industrial Training Kit 2026  
Full Stack Development Internship Program
