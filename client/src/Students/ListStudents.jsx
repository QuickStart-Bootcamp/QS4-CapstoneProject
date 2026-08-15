import React, {useEffect, useState} from 'react'
import axios from 'axios'

function ListStudents() {
  const [students, setStudents] = useState([])
  
  async function fetchStudents () {
    console.log ("Ready for connecting to server")
    let response = await axios.get ("http://localhst:4000/students/")
    console.log (response) 
    console.log (response.data)
    setStudents (response.data)
  }

  useEffect(() => {
    fetchStudents()

  }, [])
  

  return (
    <>
      <h2>Listting Students</h2>
      { students.map ( (student)=>(
        <h1>{student.firstName}</h1>))  }
    </>
  )
}

export default ListStudents
