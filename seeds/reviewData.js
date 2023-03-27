const { Review } = require("../models");

const reviewData = [
  {
    title: "Superb Service",
    text: "Our waiter, Heather, was so personable and bubbly! She brought out our food quickly, and checked on us throughout our meal, catering to our every need.",
    rating: 5,
    location_id: 8,
    user_id: 2,
  },
  {
    title: "Energetic Atmosphere",
    text: "We saw the Rockies vs. the Padres and the crowd did not disappoint! The stadium had a solid food selection, too.",
    rating: 5,
    location_id: 6,
    user_id: 3,
  },
  {
    title: "Parking Nightmare",
    text: "We sat around for nearly an hour waiting for a parking spot to open up. The hike itself was nice, but we'll look for other locations before wasting time at this location again.",
    rating: 3,
    location_id: 2,
    user_id: 1,
  },
  {
    title: "Overpriced",
    text: "I love going to the Botanical Gardens, but they must have raised their ticket prices since my last visit! $33 is outrageous!",
    rating: 2,
    location_id: 3,
    user_id: 4,
  },
  {
    title: "Bring a rain jacket!",
    text: "Fantastic time, but we got soaked! Highly recommend you bring a rain jacket.",
    rating: 3,
    location_id: 1,
    user_id: 1,
  },
  {
    title: "Stop and smell the flowers",
    text: "The Botanic gardens are one of my favorite places in Denver. Great place to people watch as well!",
    rating: 5,
    location_id: 3,
    user_id: 3,
  },
  {
    title: "Favorite place to see a movie",
    text: "Such a cool old building.",
    rating: 4,
    location_id: 4,
    user_id: 6,
  },
  {
    title: "Favorite indoor mucis venue",
    text: "I saw Taylor Swift there and had a great time!",
    rating: 4,
    location_id: 5,
    user_id: 7,
  },
  {
    title: "A bizzare, but enjoyable experiance",
    text: "It sure was a unique experiance!",
    rating: 4,
    location_id: 17,
    user_id: 5,
  },
  {
    title: "Favorite spot for coffee",
    text: "Love how quiet it is. Great place to read a book!",
    rating: 4,
    location_id: 7,
    user_id: 6,
  },
  {
    title: "The elephants were sleeping..",
    text: "We drove 3 hours to see the elephants just to find out they were sleeping! Unfortunately the zoo would not give my money back.",
    rating: 1,
    location_id: 11,
    user_id: 7,
  },
];

const seedReview = () => Review.bulkCreate(reviewData);

module.exports = seedReview;
