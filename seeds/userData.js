const { User } = require("../models");

const userData = [
  {
    username: "climbingcameron",
    email: "cameron@aol.com",
    password: "luv2climb",
  },
  {
    username: "foodie4life",
    email: "sallysmith@aol.com",
    password: "foodie4ever",
  },
  {
    username: "rockiefan91",
    email: "gilmore@aol.com",
    password: "baseballfan",
  },
  {
    username: "greenthumbgary",
    email: "plantlover@aol.com",
    password: "garden87",
  },
  {
    username: "realestateguy",
    email: "buymyhouse@aol.com",
    password: "mortgage42",
  },
  {
    username: "supermom",
    email: "supermom@aol.com",
    password: "twins87",
  },
  {
    username: "grumpyphil",
    email: "grumpypants@aol.com",
    password: "garden87",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
