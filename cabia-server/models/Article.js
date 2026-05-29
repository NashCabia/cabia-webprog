const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, default: "" },
    heroImage: { type: String, default: "" },
    content: { type: [mongoose.Schema.Types.Mixed], default: [] },
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.Article || mongoose.model("Article", articleSchema);
