import React from 'react'
import { useNavigate } from 'react-router-dom';
import { deleteStudent, getListStudents } from '../services/localstorage';

const StudentItem = ({student, setStudents}) => {
  const {id, name, email, address, phone} = student;

  const navigate = useNavigate()

  const removeStudent = ()=>{
     deleteStudent(id)
     setStudents(getListStudents())
  }
  
  return (
    <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td>{address}</td>
        <td>{phone}</td>
        <td>
            <div className="d-flex gap-3">
                <span type="button" className='badge bg-success' onClick={()=>navigate(`/edit-student/${id}`)}>
                   Edit  
                </span>
                <span type="button" className='badge bg-danger' onClick={()=> removeStudent()}>
                    delete
                </span>
            </div>
        </td>
    </tr>
  )
}
export default StudentItem
