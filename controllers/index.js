const router = require("express").Router();
const apiRoutes = require("./api/index");

router.use("/api", apiRoutes);

router.get("/", async (req, res) => {
  res.render("homepage");
  return;
});

module.exports = router;
