const Category = require("./Category");
const Location = require("./Location");
const Review = require("./Review");
const User = require("./User");

//Each Category has many Locations
Category.hasMany(Location, {
  foreignKey: "id",
  onDelete: "CASCADE",
});

Location.belongsTo(Category, {
  foreignKey: "id",
});

//Each Location has many Reviews
Location.hasMany(Review, {
  foreignKey: "id",
  onDelete: "CASCADE",
});

Review.belongsTo(Location, {
  foreignKey: "id",
});

//Each User has many Reviews
User.hasMany(Review, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Review.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { Category, Location, Review, User };
