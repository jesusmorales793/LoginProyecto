function initUsersDB() {
  if (!localStorage.getItem('usersDB')) {
    localStorage.setItem('usersDB', JSON.stringify([]));
  }
}

document
  .getElementById('registrationForm')
  .addEventListener('submit', (event) => {
    event.preventDefault();

    initUsersDB();

    const userEmail = document.getElementById('email').value;
    const userName = document.getElementById('name').value;
    const userPassword = document.getElementById('password').value;
    
    const user = { email: userEmail, name: userName, password: userPassword };

    if (validateRegistration(userEmail)) {
      alert('Email already registered');
      return;
    }

    const prevUsers = JSON.parse(localStorage.getItem('usersDB'));
    const newUsers = [...prevUsers, user];

    localStorage.setItem('usersDB', JSON.stringify(newUsers));

    alert('User registered successfully. Redirecting to login page.');

    window.location.href = '../Login/login.html';
  });

function validateRegistration(email) {
  const users = JSON.parse(localStorage.getItem('usersDB'));

  if (users.length === 0) {
    return false;
  }

  const emailVerification = users.find((user) => user.email == email);

  return emailVerification ? true : false;
}

/*

function validateRegistration(email) {
  const users = JSON.parse(localStorage.getItem('usersDB')) || [];

  return users.some((user) => user.email === email);
}

*/
