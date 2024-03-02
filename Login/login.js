function validateUser(email, password) {
  const users = JSON.parse(localStorage.getItem('users')).users;

  const checkData = (user) =>
    user.email === email && user.password === password;

  return users.some(checkData);
}

document
  .getElementById('loginForm')
  .addEventListener('submit', event => {
    event.preventDefault(); // Prevent the default form submission behavior

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const newUsers = {
      users: [
        {
          email: 'luis@gmail.com',
          password: '1234',
        },
      ],
    };

    localStorage.setItem('users', JSON.stringify(newUsers));

    if (validateUser(email, password)) {
      alert('Login successful');
      window.location.href = '../Index/index.html';
    } else {
      alert('Invalid email or password');
    }
  });

// const newUsers = {
//   users: [
//     {
//       email: "luis@gmail.com",
//       password: "1234",
//     }
//   ],
// };

// localStorage.setItem("users", JSON.stringify(newUsers));
