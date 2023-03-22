const { User } = require("../models/index");

const userData = [
  {
    username: "Mia",
    email: "user1@email.com",
    password: "testPassword",
  },
  {
    username: "George",
    email: "user2@email.com",
    password: "testPassword",
  },
  {
    username: "James",
    email: "user3@email.com",
    password: "testPassword",
  },
  {
    username: "Francisco",
    email: "user4@email.com",
    password: "testPassword",
  },
  {
    username: "Thomas",
    email: "test5@email.com",
    password: "testPassword",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
