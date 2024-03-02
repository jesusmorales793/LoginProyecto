function userCreation(){
    const newUsers = {
  users: [
    {
      email: "luis@gmail.com",
      password: "1234",
    }
  ],
};

localStorage.setItem("usersDB", JSON.stringify(newUsers));
}



function register(){


    const userEmail = document.getElementById("email").value;

    validateRegistration(userEmail);

    const userName = document.getElementById("name").value;

    const userPassword = document.getElementById("password").value;

    const user = {email:userEmail, name:userName, password:userPassword}

    const prevUsers = JSON.parse(localStorage.getItem("usersDB")).users;

    const newUsers = [...prevUsers,user]

    localStorage.setItem("usersDB", JSON.stringify(newUsers))

}

function validateRegistration(email){

    const users = JSON.parse(localStorage.getItem("usersDB")).users;

    // const emailVerification = users.find((user) => user.email == email);

    // localStorage.setItem("verifyEmail", JSON.stringify(emailVerification))

    console.log("hola")

}






