const router = require("express").Router();
const { Location, Review, User } = require("../../models");

//get all locations for a given category and all review ratings
router.get("/", async (req, res) => {
  try {
    const locationData = await Location.findAll({
      where: { category_id: req.query.category },
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
    console.log(locations);
    res.status(200).render("categories", locations);
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
    console.log(location);
    res.status(200).render("locations", location);
  } catch (err) {
    console.log(err);
    res.status(500).redirect("/");
  }
});

module.exports = router;
