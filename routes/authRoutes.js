const authMiddleware = require("../middlewares/authMiddleware");
const express = require("express");
const router = express.Router();

// ab dono import honge
const { register, login } = require("../controllers/authController");

// routes
router.post("/register", register);
router.post("/login", login);

// protected route
router.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message: "Protected route accessed",
    user: req.user,
  });
});

module.exports = router;