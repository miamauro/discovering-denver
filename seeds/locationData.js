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
    filename: "03-botanic-gardens.jpeg",
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
  {
    name: "The Original Chipotle",
    address: "1644 E Evans Ave, Denver, CO 80210",
    description: "The first Chipotle",
    filename: "13-original chipotle.jpeg",
    category_id: 3,
  },
  {
    name: "Agave Taco Bar",
    address: "2217 E Mississippi Ave, Denver, CO 80210",
    description: "Tacos and Margaritas",
    filename: "14-agave-tac-obar.jpeg",
    category_id: 3,
  },
  {
    name: "Bang Up To The Elephant!",
    address: "1310 Pearl St, Denver, CO 80203",
    description: "Carribean-inspired dishes in a fun atmosphere",
    filename: "bang-up-to-the-elephant-int04.jpg",
    category_id: 3,
  },
  {
    name: "Elitch Gardens",
    address: "2000 Elitch Cir, Denver, CO 80204",
    description: "Amusement Park",
    filename: "15 - Elitchs.jpeg",
    category_id: 1,
  },
  {
    name: "Meow Wolf Denver",
    address: "1338 1st St, Denver, CO 80204",
    description: "Surreal, walk-through art experience",
    filename: "16-meowwolf.jpg",
    category_id: 1,
  },
  {
    name: "Urban Air Trampoline and Adventure Park",
    address: "9550 E 40th Ave, Denver, CO 80238",
    description: "Large-scale indoor trampoline center",
    filename: "UrbanAir.jpg",
    category_id: 1,
  },
];

const seedLocation = () => Location.bulkCreate(locationData);

module.exports = seedLocation;
