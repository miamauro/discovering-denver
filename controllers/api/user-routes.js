const router = require("express").Router();
const { User } = require("../../models");

router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      include: [
        { model: Review, attributes: ["review_text", "rating", "location_id"] },
      ],
    });
    const user = userData.get({ plain: true });
    res.status(200).render("user", user);
  } catch (err) {
    console.log(err);
    res.status(500).redirect("/");
  }
});
