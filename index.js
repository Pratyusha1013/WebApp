const express = require("express")
const app = express()

app.use(express.json()); 

const userRoutes = require("./server/routes/User")
const productRoutes = require("./server/routes/Product")

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");  
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");  
  next();
});

app.use('/users', userRoutes)
app.use('/products', productRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server started!! Listening on port ${PORT}!!! :)`))