const express = require("express");
const router = express.Router();

const {
  getArticles,
  createArticle,
  deleteArticle,
} = require("../controllers/articleControllers");

router.get("/", getArticles);
router.post("/", createArticle);
router.delete("/:id", deleteArticle);

module.exports = router;
