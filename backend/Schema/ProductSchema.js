import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true, 
    },
    subtitle: {
      type: String,
      required: true, 
    },
    category: {
      type: String,
      required: true, 
    },
    image: {
      type: String, 
      default: "",
    },
    pdfLink: {
      type: String, 
      required: true,
    },
    isFree: {
      type: Boolean, 
      default: true,
    },
  },
  { timestamps: true } 
);

const Book = mongoose.model("Book", bookSchema);
export default Book;
