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

exports.postLogin = async (req,res)=>{
    try{
        const email = req.body.email;
        const u = await User.findOne({email:email});// User.find({email:email});
        if(u ==null){
            res.send("Email or Password is not correct");
            return;
        }
        const verify = await bcrypt.compare(req.body.password,u.password);
        if(!verify){
            res.send("Email or Password is not correct");
            return;
        }
        res.send("Loggin Done");
    }catch(err){
        res.send(err);
    }
}