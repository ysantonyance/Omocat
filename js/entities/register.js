import { registerUser } from "./firebase.js";

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const firstName = document.getElementById("firstName").value.trim();
  const lastName  = document.getElementById("lastName").value.trim();
  const email     = document.getElementById("Email").value.trim();
  const password  = document.getElementById("Password").value.trim();

  try {
    await registerUser(email, password, firstName, lastName);
    window.location.href = "index.html";
  } catch (err) {
    alert(err.message);
  }
});
