import express from "express";
import { getBook } from "../Controller/Bookctl.js";
import Book from "../Schema/ProductSchema.js"; // ✅ import Book model

const router = express.Router();

// Get all books
router.get("/", getBook);

// Download route
router.get("/download/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    // ✅ Rule 1: Free books can be downloaded directly
    if (book.isFree) {
      return res.redirect(book.pdfLink); // redirects to the file URL
    }

    // ✅ Rule 2: Paid books (future: check purchase here)
    return res.status(403).json({
      message: "This book is paid. Please purchase it to download."
    });

  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

export default router;
