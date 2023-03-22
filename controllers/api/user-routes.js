const router = require("express").Router();
const { User } = require("../../models");

//user route to get user data and associated reviews
//Need to add cookies check for loggedIn
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

//create new user
router.post("/", async (req, res) => {
  try {
    if (req.body.username && req.body.email && req.body.password) {
      const newUser = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
      res.status(200).redirect(`/api/user/${newUser.user_id}`);
    }
    res.status(400).json({ message: "failed to create new user" });
  } catch (err) {
    console.log(err);
    res.status(500).redirect("/");
  }
});

//login
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { username: req.body.username },
    });
    if (!userData) {
      res.status(404).json({ message: "Incorrect username or password!" });
      return;
    }
    const passwordValidate = await userData.checkPassword(req.body.password);
    if (!passwordValidate) {
      res.status(404).json({ message: "Incorrect username or password!" });
      return;
    }
    //add cookies for loggedIn here
    res.status(200).json({ user: userData, message: "Successfully logged in" });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
