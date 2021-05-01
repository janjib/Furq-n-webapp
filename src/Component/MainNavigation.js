import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import { Link } from "react-router-dom";



const MainNavigation = () => {



    return (
        <div >
          <Container fluid>
            <Navbar collapseOnSelect expand="lg" bg='light' variant="light" fixed='top' >
  <Navbar.Brand  href='/Furqon-webapp' className="brand-title send-upward" >Furqön</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
   <Nav className="mr-auto send-backward">
      
    </Nav>
    <Nav>
      
      <Link to='/Furqon-webapp/About-page' eventKey={2}  className="nav-link send-upward"   >
        <i className="far fa-address-card m-1" ></i>About
        
      </Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
</Container>
        </div>
    )
}

export default MainNavigation
