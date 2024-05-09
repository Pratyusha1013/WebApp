import { fetchData } from "./Main.js";

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
    ProductName: productName,
    Description: description,
    Price: price,
    CategoryID: categoryID,
    Quantity: quantity
  };

  addProduct(newItem)
    .then(data => {
      console.log("Product added successfully:", data);
    })
    .catch(err => {
      console.error("Error adding product:", err);
    });
}

async function addProduct(newItem) {
  return fetchData('/products', newItem, 'POST');
}


async function updateProduct(categoryID, updatedProduct) {
  return fetchData(`/products/${categoryID}`, updatedProduct, 'PUT');
}


async function deleteProducts(categoryID) {
  return fetchData(`/products/${categoryID}`, {}, 'DELETE');
}

function getProduct(categoryID) {
    return JSON.parse(localStorage.getItem(categoryID),'GET');
  }
  
export { addProduct, updateProduct, deleteProducts, getProduct };