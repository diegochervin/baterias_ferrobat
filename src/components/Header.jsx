import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import Nav from './Nav';

function Header({  navItems, onSeleccion }) {
  return (
    <Navbar bg="dark" variant="dark" className="px-3">
      <Container fluid>
        <Navbar.Brand>Ethereal Parfums</Navbar.Brand>
        <div className="ms-auto">
        <Nav items={["Iniciar Sesion", "Registrate"]} onSeleccion={() => {}} dark />

        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
