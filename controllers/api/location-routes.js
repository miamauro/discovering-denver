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
    const locations = locationData.map((element) =>
      element.get({ plain: true })
    );
    console.log(locations);
    res
      .status(200)
      .render("categories", { locations, loggedIn: req.session.loggedIn });
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

    req.session.save(() => {
      req.session.location_id = location.location_id;
      res.status(200).render("locations", {
        location,
        location_id: req.session.location_id,
        loggedIn: req.session.loggedIn,
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).redirect("/");
  }
});

module.exports = router;
