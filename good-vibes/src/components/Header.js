import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {

  return (

    <>
<Navbar collapseOnSelect className='header' fixed='top' expand='sm' variant='dark'>
  <Container>
    <Navbar.Toggle aria-controls='responsive-navbar-nav' data-bs-toggle="collapse"/>
    <Navbar.Collapse id='responsive-navbar-nav'>
      <Nav>
        <Nav.Link className='navbar-links' to='/home'>Home</Nav.Link>
        <Nav.Link to='/baseball'>Baseball</Nav.Link>
        <Nav.Link to='/hockey'>Hockey</Nav.Link>
        <Nav.Link to='/football'>Football</Nav.Link>
        <Nav.Link to='/about'>About</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  )
}

export default Header