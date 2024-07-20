import { Author } from "../../../db/models/author.model.js";

export const getAuthors = async (req, res) => {
  const { page } = req.query;
  const limit = 10;
  const startIndex = (page - 1) * limit;

  try {
    if (!page) {
      const authors = await Author.find();
      return res.json({ authors });
    }
    const authors = await Author.find().populate("books").limit(limit).skip(startIndex);
    return res.json({ authors });
  } catch (err) {
    console.log(err);
    return res.json({ message: "Error" });
  }
};

export const getAuthor = async (req, res) => {
  const { id } = req.params;
  try {
    const author = await Author.findById(id).populate("books");
    if (!author) {
      return res.json({ message: "Author not found" });
    }
    return res.json({ author });
  } catch (err) {
    console.log(err);
    return res.json({ message: "Error" });
  }
};

export const createAuthor = async (req, res) => {
  const requiredFields = ["name", "bio", "birthDate"];
  if (!requiredFields.every((field) => field in req.body)) {
    return res.json({ message: "Missing required fields", requiredFields });
  }
  try {
    const newAuthor = await Author.create(req.body);
    return res.json({ message: "Author added successfully", author: newAuthor });
  } catch (err) {
    console.log(err);
    return res.json({ message: "Error" });
  }
};

export const updateAuthor = async (req, res) => {
  const { id } = req.params;
  try {
    const authorData = await Author.findById(id);

    if (!authorData) {
      return res.json({ message: "Author not found" });
    }

    const author = await Author.findByIdAndUpdate(id, req.body, { new: true });

    return res.json({ message: "Author updated successfully", author });
  } catch (err) {
    console.log(err);
    return res.json({ message: "Error" });
  }
};

export const deleteAuthor = async (req, res) => {
  const { id } = req.params;
  try {
    const author = await Author.findById(id);
    if (!author) {
      return res.json({ message: "Author not found" });
    }
    await Author.findByIdAndDelete(id);
    return res.json({ message: "Author deleted successfully" });
  } catch (err) {
    console.log(err);
    return res.json({ message: "Error" });
  }
};
