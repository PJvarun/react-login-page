import React from "react";
import  Navbar  from "./components/Navbar";
import StudentForm  from "./components/StudentForm";
import  StudentList  from "./components/StudentList";
import { Route,Routes } from "react-router-dom";


 const App = () => {
  return (
    <div>
    <Navbar />
      <div className="container">
         <Routes>
           <Route path="/" element={<StudentList />} />
           <Route path="/create-student" element={<StudentForm />} /> 
           <Route path="/edit-student/:id" element={<StudentForm />} /> 
        </Routes>
      </div>
    </div>
  )
}
 export default App