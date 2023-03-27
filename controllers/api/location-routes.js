const router = require("express").Router();
const { Location, Review, Category, User } = require("../../models");

//get all locations for a given category and all review ratings
router.get("/:category", async (req, res) => {
  try {
    const locationData = await Location.findAll({
      where: { category_id: req.params.category },
      include: [
        {
          model: Review,
          attributes: ["rating"],
        },
        {
          model: Category,
          attributes: ["name"],
        },
      ],
    });
    const locations = locationData.map((element) => {
      const tempLocations = element.get({ plain: true });
      return tempLocations;
    });

    res
      .status(200)
      .render("categories", { locations, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).redirect("/");
  }
});

//get one location with review data for that location
router.get("/one/:id", async (req, res) => {
  try {
    const locationData = await Location.findOne({
      where: { location_id: req.params.id },
    });
    if (!locationData) {
      res.status(404).redirect("/");
      return;
    }
    const reviewData = await Review.findAll({
      where: { location_id: req.params.id },
      include: [
        {
          model: User,
          attributes: ["user_id", "username"],
        },
      ],
    });
    const location = locationData.get({ plain: true });
    const reviews = reviewData.map((review) => {
      const tempReview = review.get({ plain: true });
      tempReview.filledStars = "star ".repeat(tempReview.rating);
      tempReview.emptyStars = "star ".repeat(5 - tempReview.rating);
      return tempReview;
    });
    const ratingArray = [];
    for (i = 0; i < reviews.length; i++) {
      ratingArray.push(reviews[i].rating);
    }
    const average = ratingArray.reduce((a, b) => a + b, 0) / ratingArray.length;
    const averageReview = average.toFixed(1);

    req.session.save(() => {
      req.session.location_id = location.location_id;
      res.status(200).render("locations", {
        location,
        reviews,
        averageReview,
        loggedIn: req.session.loggedIn,
      });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//comment
module.exports = router;
