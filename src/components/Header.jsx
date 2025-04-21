import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import Nav from './Nav';
import logo from '../img/logo.jpeg';

function Header({  navItems, onSeleccion }) {
  return (
    <Navbar bg="black" variant="dark" className="px-3" style={{ height: '60px' }}>
    <Container fluid className="d-flex align-items-center">
      <img 
        src={logo} 
        alt="logo" 
        style={{ height: '100%', maxHeight: '50px', objectFit: 'contain' }} 
      />
      <Navbar.Brand className="ms-3">Ethereal Parfums</Navbar.Brand>
      <div className="ms-auto">
        <Nav items={["Iniciar Sesion", "Registrate"]} onSeleccion={() => {}} dark />
      </div>
    </Container>
  </Navbar>
  );
}

export default Header;
