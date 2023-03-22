const sequelize = require("../config/connection");
const seedCategory = require("./categoryData");
const seedLocation = require("./locationData");
const seedReview = require("./reviewData");
const seedUser = require("./userData");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("synced to db");
  await seedCategory();
  console.log("seeded category data");
  await seedLocation();
  console.log("seeded location data");
  await seedUser();
  console.log("seeded user data");
  await seedReview();
  console.log("seeded review data");

  process.exit(0);
};

seedAll();
