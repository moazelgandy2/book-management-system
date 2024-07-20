import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    author: String,
    publishedDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Book = mongoose.model("Book", BookSchema);
