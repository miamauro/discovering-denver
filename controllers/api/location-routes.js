const router = require("express").Router();
const { Location, Review, User } = require("../../models");

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
      ],
    });
    const locations = locationData.map((element) =>
      element.get({ plain: true })
    );
    res.status(200).json(locations);
  } catch (err) {
    console.log(err);
    res.status(500).redirect("/");
  }
});

//Get specific location information and associated review data
router.get("/one/:id", async (req, res) => {
  try {
    const locationData = await Location.findByPk(req.params.id, {
      include: [
        {
          model: Review,
          attributes: ["title", "text", "rating"],
        },
      ],
    });
    if (!locationData) {
      res.status(404).redirect("/");
      return;
    }
    const location = locationData.get({ plain: true });
    res.status(200).json(location);
  } catch (err) {
    console.log(err);
    res.status(500).redirect("/");
  }
});

module.exports = router;
