const express = require("express");
const router = express.Router();

const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
} = require("../controllers/userControllers");

router.post("/login", (req, res, next) => {
  console.log("LOGIN ROUTE HIT");
  loginUser(req, res, next);
});


router.get("/", getUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;