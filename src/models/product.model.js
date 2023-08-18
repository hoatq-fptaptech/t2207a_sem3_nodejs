const mongoose = require("mongoose");
const product_schema = new mongoose.Schema({
    name:String,
    category:{
        type: ObjectID
    }
});
module.exports = mongoose.model("Product",product_schema);
