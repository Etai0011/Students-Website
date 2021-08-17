var student = require('./studentSchema')


var getAll = ()=> {
     return new Promise((resolve, reject)=>{
        student.find({}, (err, data)=>{
            if(err){
                reject(err)
            }
            else {
                resolve(data)
            }
        })
     })    
}


var getById = (id)=> {
     return new Promise((resolve, reject)=>{
        student.findById(id,(err, data)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(data)
            }
        })
     })
}

var addStudent = (studentobj)=> {
    return new Promise((resolve, reject) => {
        var newStudent = new student({
            fullname: studentobj.fullname,
            email: studentobj.email,
            faculty: studentobj.faculty,
            birthday: studentobj.birthday,
            grades:[]
        })
        newStudent.save((err)=>{
            if(err){
                reject(err)
            }
            else{
                resolve("Student has been created")
            }  
        })
    })
}

var updateStudent = (newStudent,id) =>{
    return new Promise((resolve, reject)=>{
        student.findByIdAndUpdate(id, {

            fullname: newStudent.fullname,
            email: newStudent.email,
            faculty: newStudent.faculty,
            birthday: newStudent.birthday,
            grades: newStudent.grades
        },(err)=>{
            if(err){
                reject(err)
            }
            else {
                resolve("Updated student!")
            }
        })
    })
}

var deleteStudent = (id)=> {
    return new Promise((resolve, reject)=>{
        student.findByIdAndDelete(id,(err)=>{
            if(err){
                reject(err)
            }
            else {
                resolve("student Deleted!")
            }
        })
    })
}

module.exports = {getAll, getById, addStudent, updateStudent, deleteStudent}