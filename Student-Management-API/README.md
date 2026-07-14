# Student Management System 

## Overview

Student Management System is a RESTful backend application built with Node.js, Express.js, and MongoDB. It demonstrates professional backend development practices including authentication, CRUD operations, middleware, and secure API design.

---

## Features

* User Registration
* User Login
* JWT Authentication
* Password Encryption using bcrypt
* CRUD Operations for Students
* MongoDB Database
* Mongoose ODM
* REST API
* Protected Routes
* Error Handling Middleware
* File Upload Support (Multer)
* CORS Enabled

---

## Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs
* dotenv
* multer
* express-validator

---

## Installation

Clone the repository.

Install dependencies:

```bash
npm install
```

Create a `.env` file.

Run the server:

```bash
npm run dev
```

or

```bash
npm start
```

---

## API Endpoints

### Authentication

POST `/api/auth/register`

POST `/api/auth/login`

### Students

GET `/api/students`

GET `/api/students/:id`

POST `/api/students`

PUT `/api/students/:id`

DELETE `/api/students/:id`

---

## Author

Tharun

---

## License

MIT
