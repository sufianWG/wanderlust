# Wanderlust

Wanderlust is a simple travel destination management project created to practice CRUD operations.

Through this project, I practiced connecting a Next.js frontend application with a backend API and performing Create, Read, Update, and Delete operations.

## Project Purpose

The main purpose of this project is to understand and practice CRUD operations in a simple travel-based application.

CRUD stands for:

- **Create** — Add a new destination
- **Read** — View destinations and their details
- **Update** — Edit existing destination information
- **Delete** — Remove a destination

## Features

- Add a new travel destination
- View all destinations
- View details of a specific destination
- Edit destination information
- Delete a destination
- Delete confirmation dialog
- Dynamic destination details page
- Form handling and validation
- Responsive user interface

## Destination Information

Each destination contains information such as:

- Destination name
- Country
- Category
- Price
- Duration
- Departure date
- Image URL
- Description

## Technologies Used

- Next.js
- React
- Tailwind CSS
- HeroUI
- React Icons
- REST API

## CRUD Operations

| Operation | HTTP Method | Description |
| --- | --- | --- |
| Create | POST | Add a new destination |
| Read | GET | Get all destinations or a single destination |
| Update | PATCH | Update destination information |
| Delete | DELETE | Delete a destination |

## Getting Started

Follow the steps below to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/sufianWG/wanderlust.git
```

### 2. Go to the project directory

```bash
cd wanderlust
```

### 3. Install the dependencies

```bash
npm install
```

### 4. Run the development server

```bash
npm run dev
```

### 5. Open the project

Open the following URL in your browser:

```text
http://localhost:3000
```

## Backend Requirement

This frontend application requires a backend server to store and manage destination data.

The project currently sends API requests to:

```text
http://localhost:5260
```

Make sure the backend server is running before using the CRUD features.

## Available Scripts

### Start the development server

```bash
npm run dev
```

### Create a production build

```bash
npm run build
```

### Start the production server

```bash
npm start
```

### Check linting issues

```bash
npm run lint
```

## What I Practiced

Through this project, I practiced:

- Connecting a Next.js frontend with a backend API
- Sending GET, POST, PATCH, and DELETE requests
- Fetching and displaying data
- Creating and submitting forms
- Working with dynamic routes
- Updating existing data
- Deleting data with a confirmation dialog
- Redirecting users after successful operations
- Using reusable React components
- Building a simple responsive interface

## Repository

[View the Wanderlust repository](https://github.com/sufianWG/wanderlust)

## Author

**Md. Abu Sufian**

This project was created for learning and practicing CRUD operations.
