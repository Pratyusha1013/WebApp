
const con = require("./db_connect");

async function createProductTable() {
  let sql = `CREATE TABLE IF NOT EXISTS Product (
    ProductID INT NOT NULL AUTO_INCREMENT,
    ProductName VARCHAR(255) NOT NULL,
    Description TEXT,
    Price DECIMAL(10, 2) NOT NULL,
    CategoryID INT NOT NULL,
    Quantity INT NOT NULL,
    PRIMARY KEY(ProductID),
    FOREIGN KEY(CategoryID) REFERENCES Category(CategoryID)
  );`;

  await con.query(sql);  
}

async function getAllProducts() {
  let sql = `SELECT * FROM Product;`;
  return await con.query(sql);
}

async function addProduct(product) {
  let sql = `
    INSERT INTO Product(ProductName, Description, Price, CategoryID, Quantity)
    VALUES("${product.ProductName}", "${product.Description}", ${product.Price}, ${product.CategoryID}, ${product.Quantity})
  `;
  await con.query(sql);
}

async function editProduct(product) {
  let sql = `
    UPDATE Product SET
    ProductName = "${product.ProductName}",
    Description = "${product.Description}",
    Price = ${product.Price},
    CategoryID = ${product.CategoryID},
    Quantity = ${product.Quantity}
    
  `;
  await con.query(sql);
}

async function deleteProduct(productID) {
  let sql = `
    DELETE FROM Product
    WHERE ProductID = ${productID}
  `;
  await con.query(sql);
}

module.exports = { createProductTable, getAllProducts, addProduct, editProduct, deleteProduct };
