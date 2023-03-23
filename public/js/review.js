console.log("this script is linked");
const reviewBtn = document.querySelector("#modalBtn");
reviewBtn.addEventListener("click", console.log("this btn works"));

const reviewFormHandler = async (event) => {
  console.log("now we are in the review form handler");
  event.preventDefault();

  const title = document.getElementById("reviewTitle");

  const text = document.getElementById("reviewText");
  //   const rating = document.querySelector("#reviewText");
  // const stars = document.querySelector("#stars");
  console.log(self.stars[1].selected);

  console.log(title.value);
  console.log(text.value);
  //   console.log(rating.value);

  //   if (title && text && rating) {
  //     const response = await fetch("/api/review/", {
  //       method: "POST",
  //       body: JSON.stringify({ title, text }),
  //       headers: { "Content-Type": "application/json" },
  //     });
  //   }
};

const saveBtn = document.getElementById("saveBtn");
saveBtn.addEventListener("click", reviewFormHandler, console.log("save-test"));
