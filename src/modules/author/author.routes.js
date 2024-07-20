import { Router } from "express";
import {
  createAuthor,
  deleteAuthor,
  getAuthor,
  getAuthors,
  updateAuthor,
} from "./author.controller.js";

const AuthorsRouter = Router();

AuthorsRouter.get("/", getAuthors);
AuthorsRouter.get("/:id", getAuthor);
AuthorsRouter.post("/", createAuthor);
AuthorsRouter.put("/:id", updateAuthor);
AuthorsRouter.delete("/:id", deleteAuthor);

export default AuthorsRouter;
