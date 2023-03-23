const router = require("express").Router();
const Review = require("../models/Review");

router.get("/", async (req, res) => {
  const reviewData = await Review.findAll().catch((err) => {
    res.json(err);
  });
  const twoReviews = reviewData.slice(reviewData.length - 2);
  const reviews = twoReviews.map((review) => review.get({ plain: true }));
  // console.log(reviews);

  res.render("homepage", { reviews });
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
