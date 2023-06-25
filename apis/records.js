const express = require('express')
const router = express.Router();

const reminder_records = require('../schemas/records')

//records list as per user
router.route('/list/user/search').post(async(req,res)=>{
    try{
        const {userid} = req.body
        if(!userid){
            res.status(400)
            res.json({message: "userid is mandatory"})
            throw new Error("userid is mandatory")
        }
        let find_user = await reminder_records.find({userid})
        if(find_user != ''){
            res.json(find_user)
        }
        else{
            res.status(204)
            res.json({
                message: "No records found"
            })
        }
    }
    catch(err){
        res.status(400)
        throw new Error(err)
    }
})


// add record
router.route('/add/record').post(async(req,res)=>{
    try{
        const {time, reminderdata, userid} = req.body
        if(!time || !reminderdata || !userid){
            res.status(400)
            res.json({message: "All fields are mandatory"})
            throw new Error("All fields are mandatory")
        }
    
        let created = await reminder_records.create({time, reminderdata, userid})
        res.json(created)
    }
    catch(err){
        res.status(400)
        throw new Error(err)
    }
})


// delete record
router.route('/delete').delete(async(req,res)=>{
    try{
        let recordid = req.body.recordid
        if(!recordid){
            res.status(400)
            res.json({message: "recordid is mandatory"})
            throw new Error("recordid is mandatory")
        }
        let find_user = await reminder_records.find({_id: recordid})
        if(find_user != ''){
            let delete_record = await reminder_records.findOneAndDelete({_id: recordid})
            res.json(delete_record)
        }
        else{
            res.status(204)
            res.json({
                message: "No records found"
            })
        }
    }
    catch(err){
        res.status(400)
        throw new Error(err)
    }
})


module.exports = router