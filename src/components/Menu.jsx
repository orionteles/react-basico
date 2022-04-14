import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>

      <Navbar bg="dark" variant="dark" className="mb-3">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" to="/carros">Carros</Link>
            <Link className="nav-link" to="/array">Array</Link>
            <Link className="nav-link" to="/objeto">Objeto</Link>
            <Link className="nav-link" to="/pagina1">Página 1</Link>''
            <NavDropdown title="Filmes" className="show" id="basic-nav-dropdown">
              <Link className="dropdown-item" to="/filmes/populares">Populares</Link>
              <Link className="dropdown-item" to="/filmes/cartaz">Cartaz</Link>
              <Link className="dropdown-item" to="/filmes/lancamento">Lançamento</Link>
            </NavDropdown>
            <NavDropdown title="Séries de TV" className="show" id="basic-nav-dropdown">
              <Link className="dropdown-item" to="/series/populares">Populares</Link>
              <Link className="dropdown-item" to="/series/cartaz">Cartaz</Link>
              <Link className="dropdown-item" to="/series/lancamento">Lançamento</Link>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}

export default Menu