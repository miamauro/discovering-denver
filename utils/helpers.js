module.exports = {
  calculateAverageRating: (reviewArr) => {
    let ratingArr = [];

    reviewArr.forEach((review) => {
      ratingArr.push(review.rating);
      const arrSum = ratingArr.reduce(function (a, b) {
        return a + b;
      });
      let ratingLength = ratingArr.length;

      const averageRating = arrSum / ratingLength;
      return averageRating.fixed(1);
    });

    console.log(ratingArr);
    console.log(averageRating);
    // return ratingLength;
  },
};
