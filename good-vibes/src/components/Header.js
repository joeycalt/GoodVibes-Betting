import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';

const Header = () => {

  return (

    <>
<Navbar collapseOnSelect className='header' fixed='top' expand='sm' variant='dark'>
  <Container>
    <Navbar.Toggle aria-controls='responsive-navbar-nav' data-bs-toggle="collapse"/>
    <Navbar.Collapse id='responsive-navbar-nav'>
      <Nav>
        <Nav.Link className='navbar-links' href='/home'>Home</Nav.Link>
        <Nav.Link href='/baseball'>Baseball</Nav.Link>
        <Nav.Link href='/hockey'>Hockey</Nav.Link>
        <Nav.Link href='/football'>Football</Nav.Link>
        <Nav.Link href='/about'>About</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  )
}

export default Header