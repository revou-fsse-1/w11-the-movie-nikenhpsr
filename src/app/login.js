// Get elements from HTML
const loginForm = document.querySelector("#login-form");
const usernameInput = document.querySelector("#username-input");
const passwordInput = document.querySelector("#password-input");
const message = document.getElementById('message');

// Add event listener for login form submit
loginForm.addEventListener("submit", (event) => {
  // Prevent default form submission behavior
  event.preventDefault();

  // Get username and password input values
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Check if user exists in localStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  // If user exists, redirect to homepage
  setTimeout(function () {
    if (user) {
      // Redirect to login page
      message.innerHTML = "Login successful!. Redirecting....";
      message.style.color = "green";
      setTimeout(function () {
        window.location.href = "homepage.html";
      }, 2000);
    } else {
      message.innerHTML = "Invalid username or password.";
      message.style.color = "red";
    }
  }, 2000);
});
