const { User } = require("../models/index");

const userData = [
  {
    username: "user1",
    email: "user1@email.com",
    password: "testPassword",
  },
  {
    username: "user2",
    email: "user2@email.com",
    password: "testPassword",
  },
  {
    username: "user3",
    email: "user3@email.com",
    password: "testPassword",
  },
  {
    username: "user4",
    email: "user4@email.com",
    password: "testPassword",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
