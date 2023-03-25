console.log("this script is linked");

const saveBtn = document.getElementById("saveBtn");

const reviewFormHandler = async (event) => {
  console.log("now we are in the review form handler");
  event.preventDefault();

  const title = document.getElementById("reviewTitle").value;
  const text = document.getElementById("reviewText").value;
  const rating = document.querySelector("#rating").textContent;

  console.log(title);
  console.log(text);
  console.log(rating);

  if (title && text && rating) {
    await fetch("/api/review/", {
      method: "POST",
      body: JSON.stringify({ title, text, rating }),
      headers: { "Content-Type": "application/json" },
    }).then(document.location.reload());
  }
};

saveBtn.addEventListener("click", reviewFormHandler);
