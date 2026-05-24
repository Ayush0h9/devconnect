const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/blogApp")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Routes
const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes"); // 

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes); // 

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Server start
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});