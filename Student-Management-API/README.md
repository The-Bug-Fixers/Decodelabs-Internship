# Student Management REST API

## Description

A simple REST API built using Node.js and Express.js to manage student records.

## Features

- Get all students
- Get student by ID
- Add new student
- Update student
- Delete student
- Input validation
- JSON file storage

## Technologies

- Node.js
- Express.js

## Installation

npm install

## Run Project

node server.js

Server URL:

http://localhost:3000

## API Endpoints

GET /students

GET /students/:id

POST /students

PUT /students/:id

DELETE /students/:id

## Sample POST Body

{
    "name":"Ravi",
    "email":"ravi@gmail.com",
    "age":20,
    "branch":"IT"
}