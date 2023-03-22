const { Location } = require("../models");

const locationData = [
  {
    name: "Trading Post Trail",
    description: "Red Rocks Mountain Park, Morrison CO",
    category_id: "1",
  },
  {
    name: "Seal Rock",
    description: "Devil's Thumb trailhead on Bear Mountain Drive",
    category_id: "1",
  },
  {
    name: "Denver Botanical Gardens",
    address: "1007 York St, Denver, CO 80206",
    category_id: "1",
  },
  {
    name: "Landmark's Mayan Theater",
    address: "110 Broadway, Denver, CO 80203",
    category_id: "2",
  },
  {
    name: "Mission Ballroom",
    address: "4242 Wynkoop St, Denver, CO 80216",
    description: "concert venue",
    category_id: "2",
  },
  {
    name: "Coors Field",
    address: "2001 Blake St, Denver, CO 80206",
    description: "MLB stadium - home of the Colorado Rockies",
    category_id: "2",
  },
  {
    name: "Crema Coffee House",
    address: "2862 Larimer St, Denver, CO 80205",
    category_id: "3",
  },
  {
    name: "Katsu Ramen",
    address: "1930 S Havana St #4, Aurora, CO 80014",
    category_id: "3",
  },
  {
    name: "City O' City",
    address: "206 E 13th Ave, Denver, CO 80203",
    description: "vegetarian restaurant",
    category_id: "3",
  },
];

const seedLocation = () => Location.bulkCreate(locationData);

module.exports = seedLocation;
