import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function ListStudents() {
  const [students, setStudents] = useState([])
  const API_URL = process.env.REACT_APP_API_URL;
    
  async function fetchStudents () {
    console.log ("Ready for connecting to server")
    // let response = await axios.get ("http://localhost:4000/students/")
    let response = await axios.get(`${API_URL}/students/`);
    console.log (response) 
    console.log (response.data)
    setStudents (response.data)
  }

  useEffect(() => {
    fetchStudents()

  }, [])
  
  async function handleDelete (studentID) {
    console.log (studentID)
    //const response = await axios.delete (`http://localhost:4000/students/${studentID}`)
     let response = await axios.delete(`${API_URL}/students/${studentID}`);
    console.log (response)
  }


  return (
    <>
      <h2>Listting Students</h2>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        { students.map ( (student)=>(
          <tr>
            <td>{student.firstName}</td>
            <td>{student.lastName}</td>
            <td>@{student.email}</td>
            <td>@{student.age}</td>
            <td><Button variant="danger" onClick={()=>handleDelete(student._id)} >Delete</Button></td>
          </tr>
        ))}
       
       
      </tbody>
      </Table>
      
    </>
  )
}

export default ListStudents
