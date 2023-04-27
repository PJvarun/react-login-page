
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import React from "react";
import useForm from  "../hooks/useForm";
import uuid from "react-uuid";
import { addStudent,getStudentById } from "../services/localstorage";
import { editStudent } from "../services/localstorage";

const StudentForm = () => {
    const navigate = useNavigate();
    const {id} = useParams()
    const [showAlert, setShowAlert] =useState(false)
    const {inputValues,handleInputChange, resetForm,setForm}  =useForm({
       name:"",
       email:"",
       address:"",
       phone:"",
    });

     useEffect(()=>{
        if(id) {
            const student = getStudentById(id);
            setForm(student)
        }
     }, [id]);

     const handleSubmit = (e) =>{
        e.preventDefault()
        id ? editStudent(id, inputValues) : addStudent({id:uuid(),...inputValues})
        resetForm()
        setShowAlert(true) 
        setTimeout(()=>{
            setShowAlert(false)
        },2000)
     }
  return (
    <div>
        {/* header*/}
        <div className="d-flex my-5 justify-content-between">
            <button type="button" className='btn btn-outline-secondary bg-info text-light' onClick={()=>navigate("/")}>BACK</button>
            <h1 className="text-center">{id ? "Edit" : "Add new"} student</h1>
        </div>

        {/* Form */ }
        <div className="card border-primary p-5 m-5">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                   <label className="form-label mt-2" htmlFor="inputValid">Name</label>
                   <input   
                   id="inputValid"
                   name ="name" 
                   type="text"
                   value={inputValues.name}
                   onChange={handleInputChange}
                   className="form-control" 
                    />
                </div>

                <div className="form-group">
                   <label className="form-label mt-2" htmlFor="inputValid">Email</label>
                   <input
                   id="inputValid"
                   name="email"
                    type="email" 
                    value={inputValues.email}
                    onChange={handleInputChange}
                    className="form-control"/>

                </div>

                <div className="form-group">
                   <label className="form-label mt-2" htmlFor="inputValid">Address</label>
                   <input 
                     type="text"
                    className="form-control"
                    name="address"
                     id="inputValid"
                     value={inputValues.address}
                     onChange={handleInputChange}  />
                </div>

                <div className="form-group">
                   <label className="form-label mt-2" htmlFor="inputValid">Phone</label>
                   <input 
                type="text"
                className="form-control"
                name="phone"
                id="inputValid"
                value={inputValues.phone}
                onChange={handleInputChange}
                  />

                </div>

                <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-outline-primary text-light btn-block">{id ?"Edit" :"Add "}student</button>
                </div>
    
            </form>
        </div>
        {
            showAlert &&(
                <div  className="px-5">
                   <div className="alert alert-success text-white" > 
                     <strong> Well done! </strong>  {id ? "edit" : "added a new"} student.
                   </div>
                </div>
            )
              }
    </div>
  )
}

export default StudentForm
