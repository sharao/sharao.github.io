import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';


function Header() {
  return (
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#portfolio">Link</Nav.Link>
                
               
              </Nav>
              <Nav>
                <Nav.Link href="#deets">Connect</Nav.Link>               
              </Nav>
            </Navbar.Collapse>
          </Navbar>
  );
}

export default Header;
