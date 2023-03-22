const { Location } = require("../models");

const locationData = [
  {
    name: "Hike the Trading Post Trail",
    location: "Red Rocks Mountain Park, Morrison CO",
    category_id: "1",
    image_file: "01-trading-post-trail.jpeg",
  },
  {
    name: "Climb Seal Rock",
    location: "Devil's Thumb trailhead on Bear Mountain Drive",
    category_id: "1",
    image_file: "02-sealrock-climb.jpeg",
  },
  {
    name: "Vist the Denver Botanical Gardens",
    location: "1007 York St, Denver, CO 80206",
    category_id: "1",
    image_file: "03-botanic-gardens.jpeg",
  },
  {
    name: "Watch a movie at Landmark's Mayan Theater",
    location: "110 Broadway, Denver, CO 80203",
    category_id: "2",
    image_file: "04-mayan-theater.jpeg",
  },
  {
    name: "Sing along to a show at The Mission Ballroom",
    location: "4242 Wynkoop St, Denver, CO 80216",
    category_id: "2",
    image_file: "05-missionballroom-theater.jpeg",
  },
  {
    name: "Catch a baseball game at Coors Field",
    location: "2001 Blake St, Denver, CO 80206",
    category_id: "2",
    image_file: "06-coorsfield-baseball.jpeg",
  },
  {
    name: "Get your morning coffee at Crema Coffee House",
    location: "2862 Larimer St, Denver, CO 80205",
    category_id: "3",
    image_file: "07-creama-coffee.jpeg",
  },
  {
    name: "Have Dinner at Katsu Ramen",
    location: "1930 S Havana St #4, Aurora, CO 80014",
    category_id: "3",
    image_file: "08-katsu-ramen.jpg",
  },
  {
    name: "Eat vegetarian at City O' City",
    location: "206 E 13th Ave, Denver, CO 80203",
    category_id: "3",
    image_file: "09-cityocity.jpeg",
  },
];

const seedLocation = () => Location.bulkCreate(locationData);

module.exports = seedLocation;
