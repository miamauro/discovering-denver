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
    title: "test review",
    text: "Here is where I would add text... IF I HAD ANY!",
    rating: 3,
    location_id: 1,
    user_id: 1,
  },
  {
    title: "test review numero dos",
    text: "Just some placeholder test text",
    rating: 5,
    location_id: 1,
    user_id: 3,
  },
  {
    title: "test review, part 3",
    text: "Can I display multiple reviews on one location? Lets find out!",
    rating: 1,
    location_id: 1,
    user_id: 4,
  },
];

const seedReview = () => Review.bulkCreate(reviewData);

module.exports = seedReview;
