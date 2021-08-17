var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var studentController = require('../controllers/studentController')
// var authController = require('./controllers/authController')
var app = express()

require('../configs/studentDB')

app.use(cors())
app.use(bodyParser.urlencoded({extended:true})).use(bodyParser.json())

// connect to student controller
app.use('/students', studentController)
// connect to auth controller
// app.use('/auth', authController)

// listen on 127.0.0.1/8000
app.listen(8000, ()=>{
    console.log("The server is up!");
})