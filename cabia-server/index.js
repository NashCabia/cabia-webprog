require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const articleRoutes = require("./routes/articleRoutes");

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const allowedOrigins = [
  "http://localhost:5173",
  "https://cabia-webprog.vercel.app",
  process.env.CLIENT_URL,
].filter(Boolean);

const isOriginAllowed = (origin) => {
  if (!origin) return true;
  if (allowedOrigins.includes(origin)) return true;
  return /^https:\/\/cabia-webprog-.*\.vercel\.app$/.test(origin);
};

app.use(
  cors({
    origin: (origin, callback) => {
      if (isOriginAllowed(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

console.log("User routes mounted at /api/users");
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use("/api/users", userRoutes);
app.use("/api/articles", articleRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Server Error" });
});

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("CABIA Backend is running");
});

app.get("/api", (req, res) => {
  res.json({ message: "CABIA API is running" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

