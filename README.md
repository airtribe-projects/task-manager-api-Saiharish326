# Task Manager API

A simple task management API built with Node.js and Express.js. This API allows users to create, read, update, delete, filter, and sort tasks.

## Features

- **Create Tasks**: Add new tasks with a title, description, and completion status.
- **Read Tasks**: Retrieve all tasks or a specific task by ID.
- **Update Tasks**: Update the details of an existing task.
- **Delete Tasks**: Remove a task by ID.
- **Filter Tasks**: Filter tasks by their completion status (`completed=true` or `completed=false`).
- **Sort Tasks**: Sort tasks by their creation date (`sort=createdAt`).

## 🛠️ Tech Stack

- Node.js
- Express.js

## 🚀 Getting Started

### Prerequisites

- Node.js (>=14.x)
- npm (>=6.x)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/task-api.git
   cd task-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   node app.js
   ```

   Server will run on `http://localhost:3000`

---

## 📌 API Endpoints

### GET `/tasks`

Retrieve all tasks.

**Response:**

```json
[
  {
    "id": 1,
    "title": "Set up environment",
    "description": "Install Node.js, npm, and git",
    "completed": true
  }
]
```

---

### GET `/tasks/:id`

Retrieve a single task by ID.

**Response (200):**

```json
{
  "id": 1,
  "title": "Set up environment",
  "description": "Install Node.js, npm, and git",
  "completed": true
}
```

**Response (404):**

```json
{
  "error": "Task not found"
}
```

---

### POST `/tasks`

Create a new task.

**Request Body:**

```json
{
  "title": "New Task",
  "description": "Do something important",
  "completed": false
}
```

**Response (201):**

```json
{
  "id": 2,
  "title": "New Task",
  "description": "Do something important",
  "completed": false
}
```

---

### PUT `/tasks/:id`

Update an existing task by ID.

**Request Body:**

```json
{
  "title": "Updated Task",
  "description": "Updated description",
  "completed": true
}
```

**Response (200):**

```json
{
  "id": 1,
  "title": "Updated Task",
  "description": "Updated description",
  "completed": true
}
```

**Response (404):**

```json
{
  "error": "Task not found"
}
```

---

### DELETE `/tasks/:id`

Delete a task by ID.

**Response (200):** Empty body

**Response (404):**

```json
{
  "error": "Task not found"
}
```

---

## 🧪 Testing

You can test the endpoints using:

- [Postman](https://www.postman.com/)
- [curl](https://curl.se/)
- Any frontend or REST client

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

- [Sai Harish Adithiya](https://github.com/Saiharish326)
