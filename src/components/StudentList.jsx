import React, { useEffect, useState } from "react";
import StudentItem from "./StudentItem";
import {getListStudents} from "../services/localstorage";

const StudentList = () => {
    const [students, setStudents] = useState([])

     useEffect(()=>{
      setStudents(getListStudents())
     },[])
  return (
        <div>
        <h1 className="my-5 text-center"> Manage students </h1>
        {
          students.length > 0 ?(
            <div className="card bg-secondary p-3">
            <table className=" table table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Phone</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map(student =><StudentItem 
                student={student}
                 key={student.id} 
                
                 setStudents={setStudents}
                 />)}
                {/* <StudentItem /> */}
              </tbody>
            </table>
          </div>
       
    

          ):(
            <h3 className="text-center"> No Students </h3>
          )
        }
       </div>
  
  );
};

export default StudentList;
