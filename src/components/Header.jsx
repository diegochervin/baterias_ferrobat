import React from 'react';
import { Navbar } from 'react-bootstrap';

function Header({ usuario, tipo }) {
  return (
    <Navbar bg="dark" variant="dark" className="px-3">
        <div className="container-fluid">
     
      <Navbar.Brand>Ethereal Parfums</Navbar.Brand>
      <Navbar.Text className="ms-auto text-white px-3">
        {/* {tipo} - {usuario} */}
        HOLA
      </Navbar.Text>
    </div>
    </Navbar>
  );
}

export default Header;
