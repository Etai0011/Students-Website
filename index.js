var cors = require('cors')
var bodyParser = require('body-parser')
var express = require('express')
var studentController = require(`./controllers/studentController`)
require('./configs/studentDB')

var app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended:true})).use(bodyParser.json())
app.use('/students',studentController)




app.listen(8000,()=>{
    console.log("The server is UP");
})