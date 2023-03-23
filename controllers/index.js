const router = require("express").Router();
const apiRoutes = require("./api/index");


const homeRoutes = require("./homeRoutes");


router.use("/api", apiRoutes);
router.use("/", homeRoutes);

router.get("/", async (req, res) => {
  const reviewData = await Review.findAll().catch((err) => {
    res.json(err);
  });
  const twoReviews = reviewData.slice(reviewData.length - 2);
  const reviews = twoReviews.map((review) => review.get({ plain: true }));
  console.log(reviews);

  res.render("homepage", { reviews });
});

module.exports = router;
