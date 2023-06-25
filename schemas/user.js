const mongoose = require('mongoose')

const reminderUsers = mongoose.Schema({
    name:{
        type: String,
        required: [true, "please add name"] 
    },
    email:{
        type: String,
        required: [true, "please add email"]
    },
    phonenumber:{
        type: String,
        required: [true, "please add phone number"]
    },
    password:{
        type: String,
        required: [true, "please add password"]
    },

},
{timestamps: true}
)

const export_user_schema = mongoose.model('reminderUsers', reminderUsers)

module.exports = export_user_schema;