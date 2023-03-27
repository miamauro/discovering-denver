module.exports = {
  calculateAverageRating: (rating) => {
    let ratingArr = [];
    let ratingLength = ratingArr.length;
    forEach((rating) => {
      ratingArr.push(rating);
      arrSum = ratingArr.reduce(function (a, b) {
        return a + b;
      });
      averageRating = arrSum / ratingLength;

      return averageRating;
    });
    return ratingLength;
  },
};
