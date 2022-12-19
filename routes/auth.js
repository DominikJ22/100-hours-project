const router = require("express").Router();
const User = require("../models/User")

//REGISTER
router.post("/register",  async (req, res)=>{
    const newUser =  await new User({
    })

    await user.save();
    res.send("ok")
});



module.exports = router;