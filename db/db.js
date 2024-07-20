import mongoose from "mongoose";

export const db = mongoose
  .connect("mongodb://mongo:PTOroQZPhtPJxFZzWlCJyfViQxNuTdor@viaduct.proxy.rlwy.net:44882")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });
