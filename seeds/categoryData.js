const { Catergory } = require("../models");

const categoryData = [
  {
    name: "Adventure",
  },
  {
    name: "Entertainment",
  },
  {
    name: "Dining",
  },
];

const seedCategory = () => Catergory.bulkCreate(categoryData);

module.exports = seedCategory;
