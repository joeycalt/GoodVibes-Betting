import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {

  return (

    <>
<Navbar collapseOnSelect className='header' fixed='top' expand='sm' variant='dark'>
  <Container>
    <Navbar.Toggle aria-controls='responsive-navbar-nav' data-bs-toggle="collapse"/>
    <Navbar.Collapse id='responsive-navbar-nav'>
      <Nav>
        <Link className='navbar-links' to='/home'>Home</Link>
        <Link className='navbar-links' to='/baseball'>Baseball</Link>
        <Link className='navbar-links' to='/hockey'>Hockey</Link>
        <Link className='navbar-links' to='/football'>Football</Link>
        <Link className='navbar-links' to='/about'>About</Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  )
}

export default Header