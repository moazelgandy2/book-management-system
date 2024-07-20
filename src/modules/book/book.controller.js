import { Book } from "../../../db/models/book.model.js";

export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    return res.json(books);
  } catch (err) {
    console.log(err);
    return res.json({ message: "Error" });
  }
};

export const getBook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findById(id);
    if (!book) {
      return res.json({ message: "Book not found" });
    }
    return res.json(book);
  } catch (err) {
    console.log(err);
    return res.json({ message: "Error from GetBook", err });
  }
};

export const searchBooks = async (req, res) => {
  let { title, author } = req.query;

  try {
    if (!title) {
      title = "";
    }
    if (!author) {
      author = "";
    }
    if (!title && !author) {
      return res.json({ message: "Please provide title or author" });
    }
    const book = await Book.find({
      title: { $regex: title, $options: "i" },
      author: { $regex: author, $options: "i" },
    });

    if (!book) {
      return res.json({ message: "No Books found" });
    }

    return res.json({ book });
  } catch (err) {
    console.log(err);
    return res.json({ message: "Error" });
  }
};

export const addBook = async (req, res) => {
  const { title, content, author } = req.body;
  const requiredFields = ["title", "content", "author"];
  if (!requiredFields.every((field) => field in req.body)) {
    return res.json({ message: "Missing required fields", requiredFields });
  }
  try {
    const newBook = new Book({ title, content, author });
    await newBook.save();
    return res.json({ message: "Book added successfully", book: newBook });
  } catch (err) {
    console.log(err);
    return res.json({ message: "Error" });
  }
};

export const updateBook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findById(id);
    if (!book) {
      return res.json({ message: "Book not found" });
    }
    const newBook = await Book.findByIdAndUpdate(id, req.body, { new: true });

    return res.json({ message: "Book updated successfully", newBook });
  } catch (err) {
    console.log(err);
    return res.json({ message: "Error" });
  }
};

export const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findById(id);
    if (!book) {
      return res.json({ message: "Book not found" });
    }
    await Book.deleteOne({ _id: id });

    return res.json({ message: "Book deleted successfully" });
  } catch (err) {
    console.log(err);
    return res.json({ message: "Error" });
  }
};
