const { Category } = require("../models");

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

const seedCategory = () => Category.bulkCreate(categoryData);

module.exports = seedCategory;
