import mongoose, { Types } from "mongoose";

const AuthorSchema = new mongoose.Schema(
  {
    name: String,
    bio: String,
    birthDate: Date,
    books: [
      {
        type: Types.ObjectId,
        ref: "Book",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Author = mongoose.model("Author", AuthorSchema);
