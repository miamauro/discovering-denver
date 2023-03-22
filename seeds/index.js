const sequelize = require("../config/connection");
const category = require("./galleryData");
const location = require("./galleryData");
const review = require("./paintingData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedGallery();

  await seedPaintings();

  process.exit(0);
};

seedAll();
