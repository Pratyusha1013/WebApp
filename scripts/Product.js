
import { fetchData } from "./Main.js";

const itemForm = document.getElementById("itemForm");

if (itemForm) {
  itemForm.addEventListener('submit', addItem);
}

async function fetchProductInstances() {
  try {
    const response = await fetchData('/products/getProducts');
    if (!response.ok) {
      throw new Error('Failed to fetch product instances');
    }
    const instances = await response.json();
    displayProductInstances(instances);
  } catch (error) {
    console.error('Error fetching product instances:', error);
  }
}

function displayProductInstances(instances) {
  const container = document.getElementById("productID");
  container.innerHTML = ''; 
  
  instances.forEach(instance => {
    const instanceElement = document.createElement('div');
    instanceElement.classList.add('product-instance');

    instanceElement.innerHTML = `
      <p><strong>Product Name:</strong> ${instance.ProductName}</p>
      <p><strong>Description:</strong> ${instance.Description}</p>
      <p><strong>Price:</strong> ${instance.Price}</p>
      <p><strong>Category ID:</strong> ${instance.CategoryID}</p>
      <p><strong>Quantity:</strong> ${instance.Quantity}</p>
    `;
    
    container.appendChild(instanceElement);
  });
}

async function addItem(e) {
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

  try {
    const response = await fetch ('/products/addProduct', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(newItem)
  });
  if (!response.ok) {
      throw new Error('Failed to add product');
  }
  fetchProductInstances();
  console.log("Product added successfully");
} catch (error) {
  console.error("Error adding product:", error);
}
}


async function addProduct(newItem) {
  return fetchData('/products', newItem, 'POST');
}

async function updateProduct(productID, updatedProduct) {
  return fetchData(`/products/${productID}`, updatedProduct, 'PUT');
}

async function deleteProduct(productID) {
  return fetchData(`/products/${productID}`, {}, 'DELETE');
}

function getProductbyID(productID) {
  return JSON.parse(localStorage.getItem(productID), 'GET');
}

document.addEventListener('DOMContentLoaded', () => {
  fetchProductInstances();
});

export { addProduct, updateProduct, deleteProduct, getProductbyID };
