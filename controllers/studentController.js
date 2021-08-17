var express = require('express')
var router = express.Router()

var studentBL = require(`../models/studentBL`)

router.route('/').get(async(_req, resp)=>{
    var student = await studentBL.getAll()
    return resp.json(student)
})

router.route('/:id').get(async(req, resp)=>{
    var id = req.params.id
    var student = await studentBL.getById(id)
    return resp.json(student)
})

router.route('/').post(async(req,resp)=>{
    var newStudent = req.body
    var result = await studentBL.addStudent(newStudent)
    return resp.json(result)
})
router.route('/:id').put(async(req, resp)=>{
    var id = req.params.id
    var updatedStudent = req.body
    var result = await studentBL.updateStudent(updatedStudent, id)
    return resp.json(result)
})

router.route('/:id').delete(async(req, resp)=>{
    var id = req.params.id
    var result = await studentBL.deleteStudent(id)
    return resp.json(result)
})

module.exports = router