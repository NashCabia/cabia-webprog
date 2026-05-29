const Article = require("../models/Article");

const slugify = (value) =>
  String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

const getArticles = async (req, res) => {
  try {
    const articles = await Article.find({}).sort({ createdAt: -1 });
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createArticle = async (req, res) => {
  try {
    const title = String(req.body.title || "").trim();
    const description = String(req.body.description || "").trim();

    if (!title || !description) {
      return res
        .status(400)
        .json({ message: "Title and description are required." });
    }

    const image = String(req.body.image || "").trim();
    const heroImage = String(req.body.heroImage || "").trim();
    const content = Array.isArray(req.body.content) ? req.body.content : [];

    const baseName = slugify(req.body.name || title) || `article-${Date.now()}`;
    let name = baseName;
    let counter = 1;

    while (await Article.exists({ name })) {
      name = `${baseName}-${counter}`;
      counter += 1;
    }

    const article = await Article.create({
      name,
      title,
      description,
      image,
      heroImage: heroImage || image,
      content,
    });

    res.status(201).json(article);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteArticle = async (req, res) => {
  try {
    const article = await Article.findByIdAndDelete(req.params.id);

    if (!article) {
      return res.status(404).json({ message: "Article not found." });
    }

    res.json({ message: "Article deleted successfully." });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getArticles,
  createArticle,
  deleteArticle,
};
