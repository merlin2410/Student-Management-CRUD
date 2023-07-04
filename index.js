const form = document.getElementById("add-student");
const submit = document.getElementById("submit");
const searchField = document.getElementById("search");
const editButton = document.getElementById("editButton");
const nameField = document.getElementById("name");
const ageField = document.getElementById("age");
const gradeField = document.getElementById("grade");
const degreeField = document.getElementById("degree");
const emailField = document.getElementById("email");


const students = [];
let sId = 1;

function addStudent(){
    let obj = {
        id: sId,
        name: nameField.value,
        age: ageField.value,
        grade: gradeField.value,
        degree: degreeField.value,
        email: emailField.value
    }
    
    students.push(obj);
    renderTable(obj);

    nameField.value = "";
    ageField.value = "";
    gradeField.value = "";
    degreeField.value = "";
    emailField.value = "";
    
    sId++;
}

function renderTable(obj){
    const tableBody = document.getElementById("tableBody");
    if(obj.id<=5){
        rowId = "row"+obj.id;
        editId = "edit"+obj.id;
        deleteId = "delete"+obj.id;
        row = document.getElementById(rowId);
        row.innerHTML = '';
        row.innerHTML = `<td>${obj.id}</td>
                        <td>${obj.name}</td>
                        <td>${obj.email}</td>
                        <td>${obj.age}</td>
                        <td>${obj.grade}</td>
                        <td style="display: flex; justify-content: space-between; align-items:center;"><div>${obj.degree}</div><div><span class="material-symbols-outlined" id="${editId}" onclick = "editStudents(${obj.id})">
                        edit_square
                        </span> <span class="material-symbols-outlined" id="${deleteId}" onclick="deleteStudent(${obj.id})">
                        delete
                        </span></div></td>
                        `
    }
    else{
        rowId = "row"+obj.id;
        editId = "edit"+obj.id;
        deleteId = "delete"+obj.id;
        tableBody.innerHTML += `<tr id="${rowId}">
                        <td>${obj.id}</td>
                        <td>${obj.name}</td>
                        <td>${obj.email}</td>
                        <td>${obj.age}</td>
                        <td>${obj.grade}</td>
                        <td style="display: flex; justify-content: space-between; align-items: center;"><div>${obj.degree}</div><div><span class="material-symbols-outlined" id="${editId}" onclick = "editStudents(${obj.id})">
                        edit_square
                        </span> <span class="material-symbols-outlined" id="${deletId}" onclick="deleteStudent(${obj.id})">
                        delete
                        </span></div></td>
                        
                        </tr>
                        `
    }
}
console.log(searchField)
searchField.addEventListener("input",(e)=>{
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = ``;
    let searchedString = e.target.value.toLowerCase();
    for(let i=0;i<students.length;i++){
        let obj = students[i];
        name = obj.name.toLowerCase();
        email = obj.email.toLowerCase();
        degree = obj.degree.toLowerCase();
        if(name.includes(searchedString) || email.includes(searchedString) || degree.includes(searchedString)){
            tableBody.innerHTML += `<td>${obj.id}</td>
                        <td>${obj.name}</td>
                        <td>${obj.email}</td>
                        <td>${obj.age}</td>
                        <td>${obj.grade}</td>
                        <td>${obj.degree}</td>
                        `
        }
    }
    
});

function editStudents(id){

   

    formSection = document.getElementById("form-section");


    let obj = {};
    for(let i=0;i<students.length;i++){
        if(students[i].id===id){
            obj = students[i];
        }
    }

    submit.style.display="none";
    editButton.style.display = "block";
    editButton.className = obj.id;

    nameField.value = obj.name;
    ageField.value = obj.age;
    gradeField.value = obj.grade;
    degreeField.value = obj.degree;
    emailField.value = obj.email;
   
}

function saveData(){

    id = editButton.className;
    let obj = {};

    for(let i=0;i<students.length;i++){
        if(students[i].id==id){
            obj = students[i];
            
        }
    }

    obj.name = nameField.value;
    obj.age = ageField.value;
    obj.grade = gradeField.value;
    obj.degree = degreeField.value;
    obj.email = emailField.value;

    nameField.value = "";
    ageField.value = "";
    gradeField.value = "";
    degreeField.value = "";
    emailField.value = "";

    console.log(obj.id)

    rowId = "row"+obj.id;
    row = document.getElementById(rowId);
    row.innerHTML = `<td>${obj.id}</td>
                    <td>${obj.name}</td>
                    <td>${obj.email}</td>
                    <td>${obj.age}</td>
                    <td>${obj.grade}</td>
                    <td style="display: flex; justify-content: space-between; align-items:center;"><div>${obj.degree}</div><div><span class="material-symbols-outlined" id="${editId}" onclick = "editStudents(${obj.id})">
                    edit_square
                    </span> <span class="material-symbols-outlined" id="${deleteId}" onclick="deleteStudent(${obj.id})">
                    delete
                    </span></div></td>
                    `
}

function deleteStudent(id){
    rowId = "row"+id;
    row = document.getElementById(rowId);
    row.remove();
    let key = 0;
    for(let i=0;i<students.length;i++){
        if(id===i){
            key = i;
        }
    }
    delete students[key];
}




