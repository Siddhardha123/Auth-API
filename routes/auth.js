const router = require('express').Router();
const User = require('../models/User')


router.post('/register', async (req,res)=>{
     
    try{
        const user = new User({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
         });
          const savedUser = await user.save()
          res.send(savedUser)
    }catch(err){
        return res.status(400).send({message:err.message})
    }
});


module.exports = router;
