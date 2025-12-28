# Async–Await Mini Project — Login + Book Fetch API

REFER THIS LINK : https://chatgpt.com/canvas/shared/67bf4cb07f8481918d13a79e95843eff

🔗 **API Base URL & Endpoints Used:**  
https://instagram-express-app.vercel.app

This project is built using HTML, CSS, and JavaScript and demonstrates the use of **async–await**, API fetching, token-based login authentication, and secured book data retrieval.  
All API endpoints were tested using **Postman**, and the same responses were implemented in the project.

---

##  Project Overview

This mini project implements:

- User Login (API-based authentication)
- Token storage using `localStorage`
- Conditional UI rendering using JavaScript
- Book search form (after successful login)
- Fetch book details using Book ID
- Display API response dynamically on screen

The project is built to practice:

- Async–await in real-world API calls  
- Handling headers & tokens  
- Working with JSON responses  
- DOM manipulation  
- Error handling in async functions

---

##  Features Implemented

### 🔹 Login Flow
- User enters username & password
- Request sent using `fetch()` with async–await
- Token returned from API
- Token stored in `localStorage`
- Login form hides after success
- Book form becomes visible

### 🔹 Book Fetch Feature
- User enters **Book ID (101–110)**
- Token sent in request headers as:
- - API returns:

```json
{
  "success": true,
  "message": "Book fetched successfully",
  "data": {
    "id": 101,
    "name": "The Alchemist",
    "author": "Paulo Coelho",
    "pages": 208
  }
}

