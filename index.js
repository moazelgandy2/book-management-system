import express from "express";
import { db } from "./db/db.js";
import { Book } from "./db/models/book.model.js";
import BooksRouter from "./src/modules/book/book.routes.js";
import AuthorsRouter from "./src/modules/author/author.routes.js";
const app = express();
const port = 3000;

app.use(express.json());

db;

app.use("/books", BooksRouter);
app.use("/authors", AuthorsRouter);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
