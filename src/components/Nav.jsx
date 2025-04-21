import React from 'react';
import { Nav as BootstrapNav, Navbar, Container } from 'react-bootstrap';

function Nav({ items, onSeleccion, dark }) {
    return (
      <Navbar bg={dark ? "dark" : "light"} variant={dark ? "dark" : "light"}>
        <Container>
          <BootstrapNav className="me-auto">
            {items.map((item) => (
              <BootstrapNav.Link
                key={item}
                onClick={() => onSeleccion(item)}
                className={dark ? "text-white" : ""}
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
