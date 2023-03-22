const router = require("express").Router();
const { Location } = require("../../models");

//get all locations for a given category
router.get("/:category", async (req, res) => {
  try {
    const locationData = await Location.findAll({
      where: { category_id: req.params.category },
    });
    const locations = locationData.map((element) =>
      element.get({ plain: true })
    );
    res.status(200).render("locations", locations);
  } catch (err) {
    console.log(err);
    res.status(500).redirect("/");
  }
});

router.get("/:id", async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).redirect("/");
  }
});
