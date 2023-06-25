const express = require('express')
const cors = require('cors')
const db = require('./dbConnection/dbconnection')
const app = express()


app.use(cors())
app.use(express.json())
db();
app.use('/reminder/users',require("./apis/users_list"))
app.use('/reminder/record',require("./apis/records"))

let port = 5000
app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})