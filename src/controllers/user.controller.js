const User = require("./../models/user.model");
const bcrypt = require("bcryptjs");
exports.register = (req,res)=>{
    res.render("register");
}
exports.postRegister = async (req,res)=>{
    try{
        const data = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(data.password,salt);
        //
       // bcrypt.compare
        data.password = hashed;
        const u = new User(data);
        await u.save();
        res.send("DONE");
    }catch(err){
        res.send(err);
    }
    
}