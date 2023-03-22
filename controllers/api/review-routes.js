const router = require("express").Router();
const { Review } = require("../../models");

router.get("/:id", async (req, res) => {
  try {
    const reviewData = await Review.findAll({
      where: { location_id: req.params.id },
    });
    const reviews = reviewData.map((element) => element.get({ plain: true }));
    res.status(200).render("reviews", reviews);
  } catch (err) {
    console.log(err);
    res.status(500).redirect("/");
  }
});

router.post("/", async (req, res) => {
  try {
    const reviewData = await Review.create({
      title: req.body.title,
      text: req.body.text,
      rating: req.body.rating,
      location_id: req.body.location_id,
      user_id: req.body.user_id,
    });
    res.status(200).json(reviewData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
