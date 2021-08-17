async function getAllStudents() {
    var resp = await fetch(`http://localhost:8000/students`)
    if (resp.ok == true) {
        var students = await resp.json()
        var tableObj = document.getElementById('tbl')
        students.forEach(student => {
            var tableRow = document.createElement('tr')
            var elFnTd = document.createElement('td')
            var elFnAnchor = document.createElement('a')
            elFnTd.appendChild(elFnAnchor)
            elFnAnchor.innerText = student.fullname
            elFnAnchor.onclick = () => {
                showStudent(student._id)
            }
            var tablefac = document.createElement('td')
            tablefac.innerHTML = student.faculty
            var tablegrades = document.createElement('td')
            var ancorgrades = document.createElement('a')
            tablegrades.appendChild(ancorgrades)
            ancorgrades.innerText = "grades"
            ancorgrades.onclick = () => {
                showgrades(student._id)
            }
            var tableEditButton = document.createElement('td')
            var tableRemoveButton = document.createElement('td')
            var editButton = document.createElement('input')
            var deleteButton = document.createElement('input')
            editButton.type = "button"
            editButton.value = "Edit"
            editButton.className = "tableButton"
            editButton.onclick = () => {
                editStudent(student._id)
            }
            deleteButton.type = "button"
            deleteButton.value = "delete"
            deleteButton.className = "tableButton"
            deleteButton.onclick = () => {
                deletStudent(student._id)
            }
            tableRow.appendChild(elFnTd)
            tableRow.appendChild(tablefac)
            tableRow.appendChild(tablegrades)
            tableEditButton.appendChild(editButton)
            tableRemoveButton.appendChild(deleteButton)
            tableRow.appendChild(tableEditButton)
            tableRow.appendChild(tableRemoveButton)
            tableObj.appendChild(tableRow)
        })
    }
}
var showStudent = (id) => {
    sessionStorage.setItem("id", id)
    window.location.href = (`student.html`)
}

var showgrades = (id) => {
    sessionStorage.setItem("id", id)
    window.location.href = (`studentGrades.html`)
}

var editStudent = (id) => {
    sessionStorage.setItem("id", id)
    window.location.href = (`updateStudent.html`)
}

var deletStudent = ((id) => {
    sessionStorage.setItem("id", id)
    var fetchParams = {
        method: 'delete'
    }
    fetch(`http://localhost:8000/students/${id}`, fetchParams)
    alert("Student was deleted successfully !")
    window.location.href = (`main.html`)
})

var add = (() => {
    window.location.href = (`addStudent.html`)
})

