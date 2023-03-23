const reviewFormHandler = async (event) => {
  event.preventDefault();

<<<<<<< HEAD
  const title = document.querySelector("#review-title").value.trim();
  const text = document.querySelector("#review-text").value.trim();
  const rating = document.querySelector("#review-rating");
  const location = document.querySelector("#location_id");

  if (title && text && rating && location) {
    const submit = await fetch("/api/review", {
      method: "POST",
      body: JSON.stringify({ title, text, rating, location }),
    });
    if (submit.ok) {
      document.location.replace(`/api/location/${location}`);
    } else {
      alert("Failed to submit review");
    }
  } else {
    alert("Make sure all fields are filled");
  }
};

document
  .querySelector("#review-form")
  .addEventListener("submit", reviewFormHandler);
=======
  const title = document.querySelector("#reviewTitle");

  const text = document.querySelector("#reviewText");
  //   const rating = document.querySelector("#reviewText");
  const saveBtn = document.querySelector("#saveBtn");
  saveBtn.click(console.log("save review"));
  // console.log(title);

  if (title && text && rating) {
    const response = await fetch("/api/review/", {
      method: "POST",
      body: JSON.stringify({ title, text }),
      headers: { "Content-Type": "application/json" },
    });
  }
};
>>>>>>> main
