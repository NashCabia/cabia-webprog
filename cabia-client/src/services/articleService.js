import assets from '../assets/article-content';

let articles = [];
let nextId = 1;
const subscribers = new Set();

function normalizeAsset(a, idx) {
  const descBlock = Array.isArray(a.content) ? a.content.find((b) => typeof b === 'string') || '' : '';

  return {
    id: idx + 1,
    name: a.name,
    title: a.title,
    image: a.thumbnail || a.heroImage || a.image || '',
    heroImage: a.heroImage || a.thumbnail || a.image || '',
    description: typeof descBlock === 'string' ? descBlock.substring(0, 300) : '',
    content: a.content || [],
  };
}

function init() {
  if (articles.length) return;
  articles = assets.map((a, i) => normalizeAsset(a, i));
  nextId = articles.length + 1;
}

function notify() {
  const snapshot = articles.slice();
  subscribers.forEach((cb) => cb(snapshot));
}

export function getArticles() {
  init();
  return articles.slice();
}

export function subscribe(cb) {
  init();
  subscribers.add(cb);
  cb(articles.slice());
  return () => subscribers.delete(cb);
}

export function addArticle(item) {
  const article = {
    id: typeof item.id !== 'undefined' ? item.id : nextId++,
    name: item.name || `article-${Date.now()}`,
    title: item.title || 'Untitled',
    image: item.image || item.thumbnail || '',
    heroImage: item.heroImage || item.image || '',
    description: item.description || (typeof item.content === 'string' ? item.content : ''),
    content: item.content || [],
  };
  articles = [...articles, article];
  notify();
  return article;
}

export function removeArticle(id) {
  articles = articles.filter((a) => a.id !== id);
  notify();
}

export function findByName(name) {
  init();
  return articles.find((a) => a.name === name);
}

export default {
  getArticles,
  subscribe,
  addArticle,
  removeArticle,
  findByName,
};
