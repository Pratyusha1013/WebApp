
# Home Decor Website Project

This project aims to develop a web-based platform for selling home decor products. The website allows users to register, browse products, place orders, and leave reviews for products they have purchased. It provides a convenient and user-friendly interface for buyers and sellers in the home decor market.

## Relations:
<ol>
<li> User Table:
<ol>
   <li> Represents website users who can register, log in, and place orders. </li>
   <li> One-to-Many relationship with Order Table: One user can place multiple orders, but each order is placed by only one user. </li>
   <li> One-to-Many Relationship with Review Table: One user can write multiple reviews, but each review is written by only one user. </li>
</ol>
</li>

<li> Product Table:
<ol>
   <li> Store information about the products available on the website.</li>
   <li> One-to-Many relationship with OrderItem Table: One product can be included in multiple order items, but each order item pertains to only one product. </li>
   <li> One-to-Many relationship with Review Table: One product can have multiple reviews, but each review is for only one product. </li>
   <li> Many-to-One relationship with Category Table: Many products can belong to the same category, but each product belongs to only one category. </li>
</ol>
</li>

<li> Category Table:
<ol>
   <li> Contains categories to which products belong. </li>
   <li> One-to-Many relationship with Product Table: One category can include multiple products, but each product belongs to only one category. </li>
</ol>
</li>

<li> Order Table:  
<ol>
   <li> Store information about orders placed by users. </li>
   <li> One-to-Many relationship with OrderItem Table: One order can consist of multiple order items, but each order item belongs to only one order. </li>
   <li> Many-to-One relationship with User Table: Many orders can be associated with the same user, but each order is placed by only one user. </li>
</ol>
</li>

<li> OrderItem Table:
<ol>
   <li> Represents individual items within an order. </li>
   <li> Many-to-One relationship with Order Table: Many order items can be associated with the same order, but each order item belongs to only one order. </li>
   <li> Many-to-One relationship with Product Table: Many order items can pertain to the same product, but each order item corresponds to only one product. </li>
</ol>
</li>

<li> Review Table:
<ol>
   <li> Store reviews written by users for products. </li>
   <li> Many-to-One relationship with User Table: Many reviews can be written by the same user, but each review is written by only one user. </li>
   <li> Many-to-One relationship with Product Table: Many reviews can be for the same product, but each review is for only one product. </li>
</ol>
</li>
</ol>

## Business Rules
<ol>
<li> User Table: 
<ol>
   <li> Each user must have a unique UserID.</li>
   <li> Users can register with their UserName and Email. </li>
   <li> Passwords must be securely stored and encrypted. </li>
   <li> Users must provide valid Address information for order delivery. </li>
   <li> Payment information should be securely stored for transactions. </li>
</ol>
</li>

<li> Product Table:
<ol>
   <li> Each product must have a unique ProductID. </li>
   <li> ProductName should accurately describe the product. </li>
   <li> The description should provide comprehensive details about the product. </li>
   <li> Price should reflect the current selling price of the product. </li>
   <li> StockQuantity should represent the number of available units in stock. </li>
</ol>
</li>

<li> Category Table:
<ol>
   <li> Each category must have a unique CategoryID. </li>
   <li> Categories should help users navigate and find products easily. </li>
</ol>
</li>

<li> Order Table:
<ol>
   <li> Each order must have a unique OrderID. </li>
   <li> Orders should be associated with a registered user identified by UserID. </li>
   <li> OrderDate should indicate when the order was placed. </li>
   <li> TotalPrice should reflect the total cost of the order. </li>
</ol>
</li>

<li> OrderItem Table:
   <ol>
   <li> Each order item must have a unique OrderItemID. </li>
   <li> OrderItem should be associated with a valid OrderID and ProductID. </li>
   <li> Quantity should represent the number of units of the product ordered. </li>
   <li> Price should reflect the price of the product at the time of purchase. </li>
  </ol>
</li>

<li>Review Table:
<ol>
   <li> Each review must have a unique ReviewID. </li>
   <li> Reviews should be associated with a registered user identified by UserID and a product identified by ProductID. </li>
   <li> Rating should reflect the user's satisfaction level with the product. </li>
   <li> Comments should provide valuable feedback and insights for other users and the business. </li>
</ol>
</li>
</ol>

![Database ER diagram](https://github.com/Pratyusha1013/WebApp/assets/135672480/c5cacb58-e661-42f4-83c3-4ca91cb38815)





