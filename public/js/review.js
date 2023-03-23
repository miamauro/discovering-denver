const reviewFormHandler = async (event) => {
  event.preventDefault();

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
