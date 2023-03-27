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
    title: "Bring a rainjacket!",
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
    title: "The elephants were sleeping..",
    text: "We drove 3 hours to see the elephants just to find out they were sleeping! Unfotunately the zoo would not give my money back.",
    rating: 1,
    location_id: 11,
    user_id: 4,
  },
];

const seedReview = () => Review.bulkCreate(reviewData);

module.exports = seedReview;
