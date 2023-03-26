const router = require("express").Router();
const Review = require("../models/Review");
const User = require("../models/User");
const Location = require("../models/Location");

router.get("/", async (req, res) => {
  console.log("==================================");
  console.log(req.session);
  console.log("==================================");
  const reviewData = await Review.findAll({
    include: [
      {
        model: User,
        attributes: ["username"],
      },
      {
        model: Location,
        attributes: ["name"],
      },
    ],
  }).catch((err) => {
    res.json(err);
  });
  const twoReviews = reviewData.slice(reviewData.length - 2);
  const reviews = twoReviews.map((review) => review.get({ plain: true }));
  // console.log(reviews);

  res.render("homepage", { reviews, loggedIn: req.session.loggedIn });
});

router.get("/signup", async (req, res) => {
  res.render("signup", { loggedIn: req.session.loggedIn });
  return;
});

router.get("/login", async (req, res) => {
  res.render("login", { loggedIn: req.session.loggedIn });
  return;
});

module.exports = router;
