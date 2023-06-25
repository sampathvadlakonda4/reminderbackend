const mongoose = require('mongoose')

const cnnct = async()=>{
    try{    
        let res = await mongoose.connect('mongodb+srv://sampathvadlakonda4:sampath@cluster0.jq9wscs.mongodb.net/reminderapp?retryWrites=true&w=majority')
        console.log('db connected');
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}

module.exports = cnnct