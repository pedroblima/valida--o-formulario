import Link from 'next/link'
import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const Cabecalho = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">CPC</Navbar.Brand>
          <Nav className="me-auto">           
            <Nav.Link className='nav-link' href="/avaliacao">Avaliação de Necessidades</Nav.Link>
            <Nav.Link className='nav-link' href="/preferencia">Preferencia de Estudo</Nav.Link>
            <Nav.Link className='nav-link' href="/acompanhamento">Acompanhamento de Progresso</Nav.Link>
            <Nav.Link className='nav-link' href="/feedback">FeedBack de Aulas</Nav.Link>
            <Nav.Link className='nav-link' href="/recurso">Recurso de estudo</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Cabecalho