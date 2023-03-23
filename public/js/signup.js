const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#name-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const confirmpassword = document
    .querySelector("#confirm-password-signup")
    .value.trim();

  if (password === confirmpassword) {
    if (username && email && password) {
      const response = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({ username, email, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        document.location.replace("/");
      } else {
        alert("Failed to sign up.");
      }
    }
  } else {
    alert("Password not match");
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
