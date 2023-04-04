const form = document.getElementById('register-form');
const message = document.getElementById('message');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (password !== confirmPassword) {
    message.innerHTML = "Password and confirm password do not match";
    message.style.color = "red";
    document.getElementById('confirm-password').style.borderColor = "red";
    return;
  }

  // Show loader and save to local storage
  message.innerHTML = "Registering...";
  message.style.color = "black";
  setTimeout(function() {
    const user = { username, email, password };
    const users = getUsersFromStorage();
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    // Redirect to login page
    message.innerHTML = "Successfully registered. Redirecting to login page...";
    message.style.color = "green";
    setTimeout(function() {
      window.location.href = "login.html";
    }, 2000);
  }, 2000);
});

function getUsersFromStorage() {
  const usersJson = localStorage.getItem("users");
  if (!usersJson) {
    return [];
  }
  const users = JSON.parse(usersJson);
  return users;
}


