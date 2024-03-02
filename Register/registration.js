
function register(){

    
    const userEmail = document.getElementById("email").value;

    const userName = document.getElementById("name").value;

    const userPassword = document.getElementById("password").value;

    const user = {email:userEmail, name:userName, password:userPassword}

    validateRegistration(userEmail);

}

function validateRegistration(email){
    
    const users = JSON.parse(localStorage.getItem("users")).users;

    const usersString = JSON.stringify(users);

    console.log(users.users[0].email);


}


    


