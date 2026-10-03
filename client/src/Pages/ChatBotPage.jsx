import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from "axios";


function ChatBotPage() {
 const [question, setQuestion] = useState ("")


  async function handleSubmit(event) {
    event.preventDefault()

    //let response = await axios.post ("http://localhost:4000/ai/", {"question":question})

    const API_URL = process.env.REACT_APP_API_URL;
    let response = await axios.post(`${API_URL}/ai/`, {"question":question});
    
    console.log (response.data)
  }

  async function handleChange (event) {
    setQuestion (event.target.value)
  }

  

  return (
    <>
      <Form noValidate onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" >
            <Form.Control
              required
              type="text"
              name="question"
              placeholder="Describe your problem"
              onChange={handleChange}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" >
            <Form.Control
              required
              type="text"
              name="answer"
              placeholder="AI Answer"
            />
          </Form.Group>
        </Row>
        <Button type="submit" >Submit form</Button>
      </Form>
    </>
  )
}

export default ChatBotPage
