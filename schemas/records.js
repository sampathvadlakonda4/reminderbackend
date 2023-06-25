const mongoose = require('mongoose')

const reminderRecords = mongoose.Schema({
    time:{
        type: String,
        required: [true, "please add name"] 
    },
    reminderdata:{
        type: String,
        required: [true, "please add reminderdata"] 
    },
    userid:{
        type: String,
        required: [true, "please add userid"] 
    }
},
{timestamps: true}
)

const export_records_schema = mongoose.model('reminderRecords', reminderRecords)

module.exports = export_records_schema;