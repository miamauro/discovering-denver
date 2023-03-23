const router = require("express").Router();
const sequelize = require("sequelize");
const { Location, Review, User } = require("../../models");

//user route to get specific user and associated reviews
router.get("/", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { user_id: req.session.user_id },
      include: [
        {
          model: Review,
          attributes: ["text", "rating", "location_id"],
        },
      ],
    });
    if (!userData) {
      res.status(404).json({ message: "user not found" });
      return;
    }
    const user = userData.get({ plain: true });
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).redirect("/");
  }
});

//create new user
router.post("/", async (req, res) => {
  try {
    //If all keys are included then proceed with User.create
    if (req.body.username && req.body.email && req.body.password) {
      console.log("inside if");
      const newUser = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
      //Once new user is created then loggedIn becomes true.
      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.user_id = newUser.user_id;
        res.status(200).redirect("/");
      });
      return;
    }
    //If for some reason if was false respond with fail.
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
    //Check to make sure a username was found
    if (!userData) {
      res.status(404).json({ message: "Incorrect username or password!" });
      return;
    }
    //Check to make sure the password was valid
    const passwordValidate = await userData.validatePassword(req.body.password);
    if (!passwordValidate) {
      res.status(404).json({ message: "Incorrect username or password!" });
      return;
    }
    //if function got past checks then loggedIn becomes true and respond with 200.
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user_id = userData.user_id;
      res
        .status(200)
        .json({ user: userData, message: "Successfully logged in" });
    });
  } catch (err) {
    res.status(500).json(err + { message: "error" });
  }
});

//log out
router.post("/logout", (req, res) => {
  //if you are logged in then destroy the session page will now render as if not logged in.
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    //else respond 404 and end
    res.status(404).end();
  }
});

module.exports = router;
