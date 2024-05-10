import { fetchData } from "./Main.js";

let regForm = document.getElementById("registrationForm");

if (regForm) regForm.addEventListener('submit', Register);

function Register(e) {
  e.preventDefault();

  let Username = document.getElementById("Username").value;
  let Password = document.getElementById("Password").value;
  let Email = document.getElementById("Email").value;
  let StreetAddress = document.getElementById("StreetAddress").value; 
  let City = document.getElementById("City").value; 
  let State = document.getElementById("State").value; 
  let Zipcode = document.getElementById("Zipcode").value; 

    const user = {
      Username: Username,
      Password: Password,
      Email: Email,
      StreetAddress: StreetAddress,
      City: City,
      State: State,
      Zipcode: Zipcode
    };

    fetchData('/users/register', user, 'POST')
      .then(data => {
        if (!data.message) {
          setCurrentUser(data);
          window.location.href = "index.html";
        }
      })
      .catch(err => {
        let error = document.querySelector(".error");
        error.innerHTML = `${err.message}`;
      });

    document.getElementById("welcome").innerText = `Welcome ${Username}!`;
  }


let logForm = document.getElementById("loginForm");

if (logForm) logForm.addEventListener('submit', Login);

function Login(e) {
  e.preventDefault();

  let Username = document.getElementById("Username").value;
  let Password = document.getElementById("Password").value;

  const user = {
    Username: Username,
    Password: Password
  };

 
  fetchData('/users/login', user, 'POST')
    .then(data => {
      if (!data.message) {
        setCurrentUser(data);
        window.location.href = "index.html";
      }
    })
    .catch(err => {
      let error = document.querySelector(".error");
      error.innerHTML = `${err.message}`;
    });

  document.getElementById("welcome").innerText = `Welcome ${Username}!`;
}

function setCurrentUser(user) {
  localStorage.setItem('user', JSON.stringify(user));
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem('user'));
}

function removeUser() {
  localStorage.removeItem('user');
  window.location.href = 'index.html';
}

async function getUserByID(userID) {
  try {
    const response = await fetchData(`/users/${userID}`, {}, 'GET');
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}

export { getCurrentUser, setCurrentUser, removeUser, getUserByID };
