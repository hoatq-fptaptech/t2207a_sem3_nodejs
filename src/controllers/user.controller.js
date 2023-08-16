exports.register = (req,res)=>{
    res.render("register");
}
exports.postRegister = (req,res)=>{
    res.send("done");
}