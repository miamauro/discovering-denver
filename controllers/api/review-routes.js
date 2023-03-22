const router = require("express").Router();
const { Review } = require("../../models");

//This route may be redundant but here it is, location route already grabs review data.
router.get("/:id", async (req, res) => {
  try {
    const reviewData = await Review.findAll({
      where: { location_id: req.params.id },
    });
    const reviews = reviewData.map((element) => element.get({ plain: true }));
    res.status(200).json(reviews);
  } catch (err) {
    console.log(err);
    res.status(500).redirect("/");
  }
});

//post new review.
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

//update a review
router.put("/:id", async (req, res) => {
  try {
    //replace old values with values in req.body
    const reviewData = await Review.update(
      { text: req.body.text, title: req.body.title, rating: req.body.rating },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (!reviewData) {
      res.status(404).redirect("/");
      return;
    }
    res.status(200).json(reviewData);
  } catch (err) {
    console.log(err);
    res.status(500).redirect("/");
  }
});

//Delete a review
router.delete("/:id", async (req, res) => {
  try {
    const reviewData = await Review.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(reviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
