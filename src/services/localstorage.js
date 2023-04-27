export const  getListStudents=()=>{
    if(!localStorage["students"]){
        localStorage["students"] = JSON.stringify([])
        /*The localStorage mechanism provides a type of web storage object that lets you store and retrieve data in the browser.*/
    }
    let students =localStorage["students"]
    students = JSON.parse(students)
    return students
};

export const getStudentById =(id) =>{
    const students = getListStudents();
    const student =students.find((student) => student.id ===id)
    return student
}

export const addStudent = (student) =>{
    const students = getListStudents()
    students.push(student);
    localStorage["students"] = JSON.stringify(students)
    console.log(students);
}

export const editStudent = (id, newStudent) =>{
    let students = getListStudents();
    students = students.filter((student)=> student.id !== id)
    students.push(newStudent)
    localStorage["students"] = JSON.stringify(students)
}

export const deleteStudent = (id) =>{
     let students = getListStudents()
     students = students.filter((student)=> student.id !== id)
     localStorage["students"] = JSON.stringify(students)
}