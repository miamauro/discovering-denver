const router = require("express").Router();
const apiRoutes = require("./api/index");
const homeRoutes = require("./homeRoutes");

router.use("/api", apiRoutes);
router.use("/", homeRoutes);

router.get("/", async (req, res) => {
  res.render("homepage");
  return;
});

module.exports = router;
