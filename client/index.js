var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var studentController = require('../controllers/studentController')
var app = express()
require('../configs/studentDB')

app.use(cors())
app.use(bodyParser.urlencoded({extended:true})).use(bodyParser.json())
app.use('/students', studentController)

app.listen(8000, ()=>{
    console.log("The server is up!");
})
