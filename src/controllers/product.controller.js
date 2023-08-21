const Product = require("./../models/product.model");
exports.list = async (req,res)=>{
    try {
        const rs = await Product.find();
        res.render("product/list",{products:rs});
    } catch (error) {
        
    }
}
exports.formCreate = (req,res)=>{
    const data = req.body;
    res.render("product/form",{product:data});
}
exports.store = async (req,res)=>{
    const data = req.body;
    try {
        const p = new Product(data);
        await p.save();
        res.redirect("/product");
    } catch (error) {
        res.render("product/form",{product:data,error:error});
    }
}