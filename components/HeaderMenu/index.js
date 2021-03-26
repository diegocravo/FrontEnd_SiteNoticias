import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const HeaderMenu = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <h2 className="font-weight-bold text-primary">newsSite.com</h2>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Notícias</Nav.Link>
          <Nav.Link href="#link">Esportes</Nav.Link>
          <Nav.Link href="#link">Educação</Nav.Link>
          <Nav.Link href="#link">Tecnologia</Nav.Link>
          <Nav.Link href="#link">Variedade</Nav.Link>
          <Nav.Link href="#link">Games</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Digite Algo"
            className="mr-sm-2"
          />
          <Button variant="outline-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
            Buscar
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HeaderMenu;
