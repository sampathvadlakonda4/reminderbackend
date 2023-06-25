const express = require('express')
const router = express.Router();

const users_model = require('../schemas/user') 


// get reminder users total list
router.route('/list').get(async(req,res)=>{
    // let {name, email, phonenumber, password} = req.body
    // if(!name || email || phonenumber || password){

    // }
    try{
        const total_users = await users_model.find();
        if(total_users != ""){
            res.json(total_users)
        }
        else{
            res.status(204)
            res.json({
                message: "No records found"
            })
            throw new Error('No records found')
        }
    }
    catch(err){
        res.status(400)
        throw new Error(err)
    }
})


// add reminder user
router.route('/add').post(async(req,res)=>{
    try{
        const {name, email, phonenumber, password} = req.body
        if(!name || !email || !phonenumber || !password){
            res.status(400)
            res.json({message: "All fields are mandatory"})
            throw new Error("All fields are mandatory")
        }

        let existed = await users_model.find({email})
        if(existed != ""){
            res.status(404)
            res.json({
                message: "Record already existed with this email"
            })
            throw new Error("Record already existed with this email")
        }

        let created = await users_model.create({name, email, phonenumber, password})
        res.json(created);
    }
    catch(err){
        res.status(400)
        throw new Error(err)
    }
})

// forgot password
router.route('/forgotpassword').post(async(req,res)=>{
    try{
        const {email, password} = req.body
        if(!email || !password){
            res.status(400)
            res.json({message: "All fields are mandatory"})
            throw new Error("All fields are mandatory")
        }

        let existed = await users_model.find({email})
        if(existed == ""){
            res.status(204)
            res.json({
                message: "Mail not foound"
            })
        }
        else{
            let updated = await users_model.findOneAndUpdate({email},{email, password},{new: true})
            res.json(updated);
        }

    }
    catch(err){
        res.status(400)
        throw new Error(err)
    }
})
 
module.exports = router