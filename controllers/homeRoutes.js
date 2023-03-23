const router = require("express").Router();

router.get("/", async (req, res) => {
  res.render("homepage");
  return;
});

router.get("/signup", async (req, res) => {
  res.render("signup");
  return;
});

router.get("/login", async (req, res) => {
  res.render("login");
  return;
});

module.exports = router;
