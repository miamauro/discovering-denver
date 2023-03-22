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
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
