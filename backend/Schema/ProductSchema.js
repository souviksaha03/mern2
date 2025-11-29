import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true, // book title
    },
    subtitle: {
      type: String,
      required: true, // short description
    },
    category: {
      type: String,
      required: true, // e.g., Fiction, Education
    },
    image: {
      type: String, // book cover image URL/path
      default: "",
    },
    pdfLink: {
      type: String, // file URL or filename
      required: true,
    },
    isFree: {
      type: Boolean, // true = free, false = paid
      default: true,
    },
  },
  { timestamps: true } // auto add createdAt, updatedAt
);

const Book = mongoose.model("Book", bookSchema);
export default Book;
