# Admin Panel Project

Welcome to the Admin Panel project! This repository contains the source code for the Admin Panel application.

## Table of Contents

1. [Introduction](#introduction)
2. [Source Code Overview](#source-code-overview)
3. [Build and Run Instructions](#build-and-run-instructions)
4. [API Details](#api-details)
5. [Third-party Libraries](#third-party-libraries)
6. [Future Improvements](#future-improvements)

## 1. Introduction

This document provides documentation for the Admin Panel project, detailing its structure, functionalities, and instructions for building and running the application.

## 2. Source Code Overview

The source code for the Admin Panel is organized into modules for user and role management. Each module contains components for listing, adding, and editing users/roles.

### User Management Module

- `user-list.component`: Component for listing users.
- `add-user.component`: Component for adding users.
- `edit-user.component`: Component for editing users.
- `user.service`: Service for managing user data.

### Role Management Module

- `role-list.component`: Component for listing roles.
- `add-role.component`: Component for adding roles.
- `edit-role.component`: Component for editing roles.
- `role.service`: Service for managing role data.

## 3. Build and Run Instructions

To build and run the Admin Panel locally, follow these steps:

1. Clone the repository from GitHub.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Run the application using `ng serve`.
5. Access the Admin Panel in your web browser at `http://localhost:4200`.

## 4. API Details

The Admin Panel communicates with a JSON Server backend for user and role management. Below are the details of the API endpoi
run:- npm run server for BE 

### User Management API

- **Endpoint**: `http://localhost:5000/users`
- **Description**: This endpoint provides CRUD operations for managing users.
- **Methods**:
  - `GET`: Retrieve a list of all users.
  - `POST`: Add a new user.
  - `PUT`: Update an existing user.
  - `DELETE`: Delete a user.
- **Sample Response**:
  ```json
  [
    {
      "name": "sahil",
      "email": "msahil@gmail.com",
      "role": "user",
      "status": "active",
      "id": "35cf"
    },
    {
      "name": "Akash",
      "email": "ss@gmail.com",
      "role": "FE Developer",
      "status": "Active",
      "id": "0dd1"
    },
    ...
  ]
  ```

### Role Management API

- **Endpoint**: `http://localhost:5000/roles`
- **Description**: This endpoint provides CRUD operations for managing roles.
- **Methods**:
  - `GET`: Retrieve a list of all roles.
  - `POST`: Add a new role.
  - `PUT`: Update an existing role.
  - `DELETE`: Delete a role.
- **Sample Response**:

  ```json
    {
    "name": "Sahil",
    "description": "Working as Frontend Developer",
    "id": "3dd7"
  },
  {
    "name": "Sumit",
    "description": "Working as a BE Developer",
    "id": "d651"
  },
  ...
  ]

  ```

- Angular Material: UI components for Angular applications.
- HttpClientModule: Angular module for making HTTP requests.
- Others...

## 6. Future Improvements <a name="future-improvements"></a>

Potential enhancements for the Admin Panel include:

- Implementing additional features such as user authentication and authorization.
- Enhancing the UI/UX for better user experience.
- Optimizing performance and scalability.
