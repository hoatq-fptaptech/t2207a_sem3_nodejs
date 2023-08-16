const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.listen(port,function(){ // callback function
    console.log("Server is running...");
})
require("./src/db/datatabase");
app.set("view engine","ejs");
app.use(express.static("public"));

const webrouter = require("./src/routes/web");
app.use("/",webrouter); 
const userrouter = require("./src/routes/user");
app.use("/auth",userrouter);

