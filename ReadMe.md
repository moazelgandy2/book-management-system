# 📚 Book Management System 📖

This application manages a collection of books and authors. It provides an API to perform CRUD operations on books and authors.

## ✨ Features

- 📖 Create, read, update, and delete books
- 🖊️ Create, read, update, and delete authors
- 🔄 Pagination for book and author listings
- 🔍 Search functionality to filter books by title or author, and authors by name or bio
- 📑 Retrieve a list of books written by a specific author

## 🛠️ Models

### 📘 Book Model

- `title` (String, required)
- `content` (String, required)
- `author` (String, required)
- `publishedDate` (Date, default to the current date)

### 🖋️ Author Model

- `name` (String, required)
- `bio` (String)
- `birthDate` (Date)
- `books` (Array of ObjectIds referencing Book model)

## 🌐 API Endpoints

### 📚 Book Endpoints

- **GET /books/**

  - Retrieve all books (supports pagination)

- **GET /books/book/:id**

  - Retrieve a single book by its ID

- **GET /books/search**

  - Search for books by title or author

- **POST /books/**

  - Create a new book
  - Request body: `{ "title": "Book Title", "content": "Book Content", "author": "Author Name" }`

- **PUT /books/:id**

  - Update a book by its ID
  - Request body: `{ "title": "New Title", "content": "New Content", "author": "New Author Name" }` (partial updates allowed)

- **DELETE /books/:id**
  - Delete a book by its ID

### 🖊️ Author Endpoints

- **GET /authors/**

  - Retrieve all authors (supports pagination)

- **GET /authors/:id**

  - Retrieve a single author by its ID, including a list of books written by them

- **POST /authors/**

  - Create a new author
  - Request body: `{ "name": "Author Name", "bio": "Author Bio", "birthDate": "YYYY-MM-DD" }`

- **PUT /authors/:id**

  - Update an author by its ID
  - Request body: `{ "name": "New Name", "bio": "New Bio", "birthDate": "YYYY-MM-DD" }` (partial updates allowed)

- **DELETE /authors/:id**
  - Delete an author by its ID

## 🌟 Bonus Features

- **Search Functionality**
  - Filter books by title or author
  - Filter authors by name or bio

## 🛠️ Setup and Running the Application

1. 📥 Clone the repository:

   ```bash
   git clone httpshttps://github.com/moazelgandy2/book-management-system.git
   cd book-management-system
   ```

2. 📦 Install dependencies:

   ```bash
   npm install
   #or
    yarn install
   ```

3. 🚀 Run the application:

   ```bash
   npm run dev
   #or
    yarn run dev
   ```

4. 🧪 Testing the API with Postman

   You can use the following Postman collection to test the API endpoints: **[Postman Collection](https://documenter.getpostman.com/view/27734556/2sA3kUGhfM)**.

## 🎉 Conclusion

This application provides a simple and efficient way to manage a collection of books and authors. It offers a variety of features, including CRUD operations, pagination, and search functionality. Feel free to explore the codebase and customize it to suit your needs!
