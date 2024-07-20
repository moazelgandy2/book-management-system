import { Router } from "express";
import {
  addBook,
  deleteBook,
  getBook,
  getBooks,
  searchBooks,
  updateBook,
} from "./book.controller.js";

const BooksRouter = Router();

BooksRouter.get("/", getBooks);
BooksRouter.get("/book/:id", getBook);
BooksRouter.get("/search", searchBooks);
BooksRouter.post("/", addBook);
BooksRouter.put("/:id", updateBook);
BooksRouter.delete("/:id", deleteBook);

export default BooksRouter;
