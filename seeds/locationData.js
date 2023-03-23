const { Location } = require("../models");

const locationData = [
  {
    name: "Trading Post Trail",
    description: "Red Rocks Mountain Park, Morrison CO",
    filename: "01-trading-post-trail.jpeg",
    category_id: 1,
  },
  {
    name: "Seal Rock",
    description: "Devil's Thumb trailhead on Bear Mountain Drive",
    filename: "02-sealrock-climb.jpeg",
    category_id: 1,
  },
  {
    name: "Denver Botanical Gardens",
    address: "1007 York St, Denver, CO 80206",
    filename: "03-botanical-gardens.jpeg",
    category_id: 1,
  },
  {
    name: "Landmark's Mayan Theater",
    address: "110 Broadway, Denver, CO 80203",
    filename: "04-mayan-theater.jpeg",
    category_id: 2,
  },
  {
    name: "Mission Ballroom",
    address: "4242 Wynkoop St, Denver, CO 80216",
    description: "concert venue",
    filename: "05-missionballroom-theater.jpeg",
    category_id: 2,
  },
  {
    name: "Coors Field",
    address: "2001 Blake St, Denver, CO 80206",
    description: "MLB stadium - home of the Colorado Rockies",
    filename: "06-coorsfield-baseball.jpeg",
    category_id: 2,
  },
  {
    name: "Crema Coffee House",
    address: "2862 Larimer St, Denver, CO 80205",
    filename: "07-crema-coffee.jpeg",
    category_id: 3,
  },
  {
    name: "Katsu Ramen",
    address: "1930 S Havana St #4, Aurora, CO 80014",
    filename: "08-katsu-ramen.jpg",
    category_id: 3,
  },
  {
    name: "City O' City",
    address: "206 E 13th Ave, Denver, CO 80203",
    description: "vegetarian restaurant",
    filename: "09-cityocity.jpeg",
    category_id: 3,
  },
  {
    name: "Denver Museum of Nature & Science",
    address: "2001 Colorado Blvd, Denver, CO 80205",
    description: "Museum of Nature and Science",
    filename: "10-dmnsdino.jpg",
    category_id: 2,
  },
  {
    name: "Denver Zoo",
    address: "2300 Steele St, Denver, CO 80205",
    description: "Denver's one and only Zoo",
    filename: "11-denver-zoo.jpg",
    category_id: 2,
  },
  {
    name: "McGregor Square",
    address: "1901 Wazee St, Denver, CO 80202",
    description: "Baseball themed square next to the Colorado Rockies stadium",
    filename: "12-mcgregorsquare.jpg",
    category_id: 2,
  },
];

const seedLocation = () => Location.bulkCreate(locationData);

module.exports = seedLocation;
