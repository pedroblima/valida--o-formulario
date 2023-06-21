import Link from 'next/link'
import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const Cabecalho = () => {
  return (
    <>
      <Navbar bg="secondary" variant="dark">
        <Container>
          <Navbar.Brand href="/"> <img
                        src="https://concursosnobrasil.com/wp-content/uploads/2021/07/cbr-logo.png"
                        className="img-fluid me-1"
                        alt="Logo"
                        style={{ maxWidth: "150px" }}
                    /></Navbar.Brand>
          <Nav className="me-auto">           
            <Nav.Link className='nav-link' href="/avaliacao/form">Avaliação </Nav.Link>
            <Nav.Link className='nav-link' href="/preferencia/form">Preferencia </Nav.Link>
            <Nav.Link className='nav-link' href="/acompanhamento/form">Acompanhamento </Nav.Link>
            <Nav.Link className='nav-link' href="/feedback/form">FeedBack </Nav.Link>
            <Nav.Link className='nav-link' href="/recurso/form">Recurso </Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Faça seu Cadastro: <a href="/login/form">Cadastro</a>
          </Navbar.Text>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Cabecalho