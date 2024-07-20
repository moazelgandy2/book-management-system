import mongoose from "mongoose";

export const db = mongoose
  .connect("mongodb://localhost:27017/books")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });
