import React from 'react';
import{Navbar,Form,FormControl,Nav,NavDropdown,Container,Button } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="primary" expand="lg" variant = "dark">
  <Container>
    <Navbar.Brand href="#">WriteItUp</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
<Nav className="m-auto"> 
    <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
       
      </Form>
</Nav>
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#">My Notes</Nav.Link>
        <NavDropdown title="Nipun Gera" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Log Out</NavDropdown.Item>
                </NavDropdown>
        
        
      </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Header