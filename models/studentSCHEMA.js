var mongoose = require('mongoose')
const { stringify } = require('querystring')

var Schema = mongoose.Schema

var studentSchema = new Schema({
    
    fullname: String,
    email: String,
    faculty: String,
    birthday: Date,
    grades:[{
        date: String,
        grade: Number,
        _id:false
    }]
})

module.exports = mongoose.model('student',studentSchema)
