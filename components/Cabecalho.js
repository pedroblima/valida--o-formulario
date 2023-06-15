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
            <Nav.Link className='nav-link' href="/PMERJ">PMERJ</Nav.Link>
            <Nav.Link className='nav-link' href="/PCDF">PCDF</Nav.Link>
            <Nav.Link className='nav-link' href="/PMDF">PMDF</Nav.Link>
            <Nav.Link className='nav-link' href="/SPTC">SPTC</Nav.Link>
            <Nav.Link className='nav-link' href="/PF">PF</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Cabecalho