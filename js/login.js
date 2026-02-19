import { signIn, signUp } from "./auth.js";

// Elements
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("loginButton");
const signupButton = document.getElementById("signupButton");
const message = document.getElementById("message");

// Login
loginButton.addEventListener("click", async () => {
  const email = emailInput.value;
  const password = passwordInput.value;
  const { data, error } = await signIn(email, password);

  if (error) message.textContent = error.message;
  else window.location.href = "infinitynikki.html"; // redirect to main page
});

// Sign up
signupButton.addEventListener("click", async () => {
  const email = emailInput.value;
  const password = passwordInput.value;
  const { data, error } = await signUp(email, password);

  if (error) message.textContent = error.message;
  else {
    message.textContent = "Signed up! You can now log in.";
  }
});
