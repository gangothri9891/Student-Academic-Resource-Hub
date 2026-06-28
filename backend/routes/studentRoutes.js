const express = require("express");
const router = express.Router();

const studentController = require("../controllers/studentController");

console.log(typeof studentController.getResources);
console.log(typeof studentController.getBooks);

router.post("/register", studentController.register);
router.post("/login", studentController.login);

router.get("/resources", studentController.getResources);
router.post("/resources", studentController.addResource);
router.put("/resources/:id", studentController.updateResource);
router.delete("/resources/:id", studentController.deleteResource);

router.get("/books", studentController.getBooks);
router.post("/books", studentController.addBook);
router.put("/books/:id", studentController.updateBook);
router.delete("/books/:id", studentController.deleteBook);
// Bookmarks
router.get("/bookmarks", studentController.getBookmarks);
router.post("/bookmarks", studentController.addBookmark);
router.put("/bookmarks/:id", studentController.updateBookmark);
router.delete("/bookmarks/:id", studentController.deleteBookmark);
// Scholarships
router.get("/scholarships", studentController.getScholarships);
router.post("/scholarships", studentController.addScholarship);
router.put("/scholarships/:id", studentController.updateScholarship);
router.delete("/scholarships/:id", studentController.deleteScholarship);
// Internships
router.get("/internships", studentController.getInternships);
router.post("/internships", studentController.addInternship);
router.put("/internships/:id", studentController.updateInternship);
router.delete("/internships/:id", studentController.deleteInternship);

module.exports = router;