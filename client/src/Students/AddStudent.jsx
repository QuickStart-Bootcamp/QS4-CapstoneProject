import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function AddStudent() {
  const [formData, setFormData] = useState ({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    username: "",
    password: ""
  })


  async function handleSubmit (event) {
    event.preventDefault()
    console.log (formData)
    let response = await axios.post ("http://localhost:4000/students/", formData)
    console.log (response)
  }

  function handleChange (event) {
    console.log (event)
    console.log (event.target)
    console.log (event.target.name)
    console.log (event.target.value)
    setFormData ({...formData, [event.target.name]:event.target.value })
  }

  return (
    <>
      <h2>Add Student</h2>
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
        <Row className="mb-3">
          <Form.Group as={Col} md="4" >
            <Form.Control
              required
              type="text"
              placeholder="First name"
              name="firstName"
              onChange= {(event)=>handleChange(event)}
            />

          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              name="lastName"
              onChange= {(event)=>handleChange(event)}
            />

          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" >
            <Form.Control
              required
              type="text"
              placeholder="email"
              name="email"
              onChange= {(event)=>handleChange(event)}
            />

          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Control
              required
              type="text"
              placeholder="age"
              name="age"
              onChange= {(event)=>handleChange(event)}
            />

          </Form.Group>
        </Row>
      
        <Button type="submit">Submit form</Button>
      </Form>
    </>
  )
}

export default AddStudent
