const reviewFormHandler = async (event) => {
  event.preventDefault();

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
