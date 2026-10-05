import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

export default function LoginStudent({isLoggedin,setIsLoggedin}) {

  const [formData, setFormData] = useState ({
    username: "",
    password: ""
  })
  const API_URL = process.env.REACT_APP_API_URL;


  function handleChange (event) {
    setFormData ({...formData, [event.target.name]:event.target.value})
  }

  async function handleSubmit (event) {
    event.preventDefault()
    //let response = await axios.post ("http://localhost:4000/students/login/", formData)
    let response = await axios.post(`${API_URL}/students/login/`, formData);
    console.log (response)
    console.log (response.data)
    setIsLoggedin (true)
    
  }


  return (
    <>
      <h2>Login Page</h2>
      <Form noValidate onSubmit={(event)=>handleSubmit(event)}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" >
            <Form.Control
              required
              type="username"
              placeholder="username"
              name="username"
              onChange= {(event)=>handleChange(event)}
            />

          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Control
              required
              type="password"
              placeholder="password"
              name="password"
              onChange= {(event)=>handleChange(event)}
            />

          </Form.Group>
        </Row>
        <Button type="submit">Login</Button>
      </Form>
    </>
  )
}
