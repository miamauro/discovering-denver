const { Category } = require("../models");

const categoryData = [
  {
    name: "adventure",
  },
  {
    name: "entertainment",
  },
  {
    name: "dining",
  },
];

const seedCategory = () => Category.bulkCreate(categoryData);

module.exports = seedCategory;
