const express = require("express");
const env = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./src/routes/auth");
const adminRoutes = require("./src/routes/admin/auth");
const categoryRoutes = require("./src/routes/category");
const productRoutes = require("./src/routes/product");
const cartRoutes = require("./src/routes/cart");
const initialDataRoute = require("./src/routes//admin/initialData");
const pageRoutes = require("./src/routes/admin/page");
const orderRoutes = require("./src/routes/order");
const adminOrderRoute = require("./src/routes/admin/order.routes");
const addressRoutes = require("./src/routes/address");
const cors = require("cors");
//environment variable or you can say constants
env.config();7

mongoose.connect('mongodb://localhost:27017/EstyClone',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify:false,
        useCreateIndex:true
    })
    .then(() => {
        console.log("Database Connected");
    })
    .catch(err => {
        console.log(err);
        console.log("DB Connection Failed");
    });

   app.use(express.json());
   app.use(express.urlencoded({ extended: true }));

   //Router
   app.use(cors());
    app.use("/api",userRoutes);    //api is prefix of all routes
    app.use("/api",adminRoutes); 
    app.use("/api",categoryRoutes); 
    app.use("/api",productRoutes);
    app.use("/api",cartRoutes);
    app.use("/api",initialDataRoute);
    app.use("/api", pageRoutes);
    app.use("/api", orderRoutes);
    app.use("/api", addressRoutes);
    app.use("/api", adminOrderRoute);

    
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
      });