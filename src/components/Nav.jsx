import React from 'react';
import { Nav as BootstrapNav, Navbar, Container } from 'react-bootstrap';

function Nav({ items, onSeleccion, dark: black }) {
    return (
      <Navbar bg={black ? "black" : "light"} variant={black ? "black" : "light"}>
        <Container>
          <BootstrapNav className="me-auto">
            {items.map((item) => (
              <BootstrapNav.Link
                key={item}
                onClick={() => onSeleccion(item)}
                className={black ? "text-white" : ""}
              >
                {item}
              </BootstrapNav.Link>
            ))}
          </BootstrapNav>
        </Container>
      </Navbar>
    );
  }

export default Nav;
