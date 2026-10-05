import 'bootstrap/dist/css/bootstrap.min.css';
import LoginStudent from './Students/LoginStudent';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import HomePage from './Pages/HomePage';
import ServicesPage from './Pages/ServicesPage';
import StudentsPage from './Pages/StudentsPage';
import ChatBotPage from './Pages/ChatBotPage';
import FormPage from './Pages/FormPage';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";

function App() {
  const [isLoggedin, setIsLoggedin] = useState (false)

  console.log (isLoggedin)

  function ProtectedRoute({ isLoggedIn, children }) {
    if (!isLoggedIn) {
      return <Navigate to="/login" />;
    }

    return children;
  }
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container >
          <Nav>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/service">Service</Nav.Link>
            <Nav.Link as={Link} to="/students">Students</Nav.Link>
            <Nav.Link as={Link} to="/ai">ChatBot</Nav.Link>
            <Nav.Link as={Link} to="/form">NewForm</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route 
          path="/service" 
          element={
          <ProtectedRoute isLoggedIn={isLoggedin} >
            <ServicesPage />
          </ProtectedRoute>
          
        } 
        />
        <Route path="/students" element={<StudentsPage />} />
        <Route path="/login" element={<LoginStudent isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} />} />
        <Route path="/ai" element={<ChatBotPage />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </>
  
  );
}

export default App;
