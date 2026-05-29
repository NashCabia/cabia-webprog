import axios from "axios";
import assets from "../assets/article-content";
import { API_URL } from "../constants";

const articleApi = axios.create({
  baseURL: `${API_URL}/articles`,
});


let articles = [];
let nextId = 1;
let initPromise = null;
const subscribers = new Set();

function normalizeAsset(a, idx) {
  const descBlock = Array.isArray(a.content)
    ? a.content.find((b) => typeof b === "string") || ""
    : "";

  return {
    id: idx + 1,
    name: a.name,
    title: a.title,
    image: a.thumbnail || a.heroImage || a.image || "",
    heroImage: a.heroImage || a.thumbnail || a.image || "",
    description: typeof descBlock === "string" ? descBlock.substring(0, 300) : "",
    content: a.content || [],
    source: "asset",
  };
}

function normalizeServer(a) {
  const descBlock = Array.isArray(a.content)
    ? a.content.find((b) => typeof b === "string") || ""
    : "";

  return {
    id: a._id,
    _id: a._id,
    name: a.name,
    title: a.title,
    image: a.image || a.heroImage || "",
    heroImage: a.heroImage || a.image || "",
    description: a.description || descBlock.substring(0, 300),
    content: Array.isArray(a.content) ? a.content : [],
    source: "server",
  };
}

function notify() {
  const snapshot = articles.slice();
  subscribers.forEach((cb) => cb(snapshot));
}

function ensureAssets() {
  if (articles.length) return;
  articles = assets.map((a, i) => normalizeAsset(a, i));
  nextId = articles.length + 1;
}

async function init() {
  ensureAssets();

  if (initPromise) return initPromise;

  initPromise = (async () => {
    try {
      const response = await API.get("/");
      const serverArticles = response.data.map((item) => normalizeServer(item));

      articles = [
        ...articles.filter((item) => item.source !== "server"),
        ...serverArticles,
      ];
      notify();
    } catch (error) {
      console.warn("Unable to load articles from server.", error);
    }
  })();

  return initPromise;
}

export function getArticles() {
  init();
  return articles.slice();
}

export function subscribe(cb) {
  ensureAssets();
  subscribers.add(cb);
  cb(articles.slice());
  init().then(() => cb(articles.slice()));
  return () => subscribers.delete(cb);
}

export async function addArticle(item) {
  await init();

  const payload = {
    name: item.name,
    title: item.title,
    description: item.description,
    image: item.image,
    heroImage: item.heroImage,
    content: Array.isArray(item.content) ? item.content : [],
  };

  const response = await API.post("/", payload);
  const article = normalizeServer(response.data);

  articles = [...articles, article];
  notify();
  return article;
}

export async function removeArticle(id) {
  await init();

  const target = articles.find((article) => article.id === id || article._id === id);

  if (target?._id) {
    await API.delete(`/${target._id}`);
  }

  articles = articles.filter((article) => article.id !== id && article._id !== id);
  notify();
}

export function findByName(name) {
  init();
  return articles.find((article) => article.name === name);
}

export async function getArticleByName(name) {
  await init();
  return articles.find((article) => article.name === name) || null;
}

export default {
  getArticles,
  subscribe,
  addArticle,
  removeArticle,
  findByName,
  getArticleByName,
};
