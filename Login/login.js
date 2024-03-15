function initUsersDB() {
  if (!localStorage.getItem('usersDB')) {
    localStorage.setItem('usersDB', JSON.stringify([]));
  }
}

function validateUser(email, password) {
  const users = JSON.parse(localStorage.getItem('usersDB')) || [];

  return users.some(user => user.email === email && user.password === password);
}

document.getElementById('loginForm').addEventListener('submit', (event) => {
  event.preventDefault();

  initUsersDB();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (validateUser(email, password)) {
    alert('Login successful');
    window.location.href = '../Index/index.html';
  } else {
    alert('Invalid email or password');
  }
});
