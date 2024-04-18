let loginForm=document.getElementById("loginForm")
loginForm.addEventListener('submit',loginUser)

function loginUser(event) 
{
    event.preventDefault(); 

    
    let email = document.getElementById('Email').value;
    let password = document.getElementById('Password').value;

    
    const logindetails = 
    {
        email: email,
        password: password
    }
    window.alert(JSON.stringify(logindetails)); 
}