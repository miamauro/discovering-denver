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

// router.post("/", async (req, res) => {
//   try {
//     const reviewData = await Review.create({
//       review
//     })
//   }
// })
