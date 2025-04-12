# Uber App

## Overview
The Uber App is a backend application that simulates a ride-sharing service. It is built using Node.js, Express, and MongoDB. This application allows users to register, log in, and manage their profiles.

## Project Structure
```
Uber_App
├── Backend
│   ├── models
│   │   └── user.model.js
│   ├── routes
│   │   └── index.js
│   ├── controllers
│   │   └── index.js
│   ├── middlewares
│   │   └── index.js
│   ├── utils
│   │   └── index.js
│   ├── app.js
│   └── server.js
├── package.json
├── .env
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd Uber_App
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Environment Variables
Create a `.env` file in the root directory and add the following variables:
```
JWT_SECRET=<your_jwt_secret>
HASH_ROUNDS=<number_of_hash_rounds>
MONGO_URI=<your_mongo_connection_string>
```

## Running the Application
To start the server, run:
```
npm start
```
The server will start on the specified port in your environment variables.

## API Endpoints
# User Authentication Endpoints Documentation

## Endpoint: `/users/register`

### Method: `POST`

This endpoint is used to register a new user in the system.

---

## Request Body

The request body should be in JSON format and must include the following fields:

| Field               | Type   | Required | Description                                      |
|---------------------|--------|----------|--------------------------------------------------|
| `fullName.firstName`| String | Yes      | The first name of the user (min 3 characters).  |
| `fullName.lastName` | String | Yes      | The last name of the user (min 3 characters).   |
| `email`             | String | Yes      | The email address of the user (must be valid).  |
| `password`          | String | Yes      | The password for the user (min 6 characters).   |

### Example Request Body

```json
{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "johndoe@example.com",
  "password": "password123"
}
```

## Endpoint: `/users/login`

### Method: `POST`

This endpoint is used to authenticate an existing user and provide a JSON Web Token (JWT) for further requests.

---

## Request Body

The request body should be in JSON format and must include the following fields:

| Field      | Type   | Required | Description                                      |
|------------|--------|----------|--------------------------------------------------|
| `email`    | String | Yes      | The email address of the user (must be valid).  |
| `password` | String | Yes      | The password for the user (min 6 characters).   |

### Example Request Body

```json
{
  "email": "johndoe@example.com",
  "password": "password123"
}
```

## Contributing
Feel free to submit issues or pull requests for any improvements or bug fixes.

## License
This project is licensed under the MIT License.