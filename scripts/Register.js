let registrationForm=document.getElementById("registrationForm")
registrationForm.addEventListener('submit',registerUser)


function registerUser(event) 
{
    event.preventDefault();

    
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    const user = 
    {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        confirmPassword: confirmPassword
    }
    window.alert(JSON.stringify(user)); 
}

