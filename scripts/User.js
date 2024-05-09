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

const itemForm = document.getElementById("itemForm");

if (itemForm) {
  itemForm.addEventListener('submit', addItem);
}

function addItem(e) {
  e.preventDefault();

  const productName = document.getElementById("productName").value;
  const description = document.getElementById("description").value;
  const price = document.getElementById("price").value;
  const categoryID = document.getElementById("categoryID").value;
  const quantity = document.getElementById("quantity").value;

  const newItem = {
    productName: productName,
    description: description,
    price: price,
    categoryID: categoryID,
    quantity: quantity
  };

  fetchData('/products/addProduct', newItem, 'POST')
    .then(data => {
      console.log("Item added successfully:", data);
      document.getElementById("item").innerText = `${productName} added successfully!`;
      localStorage.setItem('newItem', JSON.stringify(newItem));
    })
    .catch(err => {
      console.error("Error adding item:", err);
    });
}

function getCurrentItem() {
  return JSON.parse(localStorage.getItem('newItem'));
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

export { getCurrentUser, setCurrentUser, removeUser, getCurrentItem };
