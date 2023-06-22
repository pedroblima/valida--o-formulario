import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Cabecalho from './Cabecalho';
import Rodape from './Rodape';
import { Container } from 'react-bootstrap';

const Pagina = (props) => {
  return (
    <>
      <Cabecalho />
      <div className="bg-dark text-white py-3 text-center mb-3">
        <h1>{props.titulo}</h1>
      </div>

      <video autoPlay muted loop style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', objectFit: 'cover', zIndex: '-1' }}>
        <source src="https://caveira.com/wp-content/uploads/2023/01/CapaHome2.mp4" type="video/mp4" />
      </video>

     
        <Container className='mb-5'>
          {props.children}
        </Container>

        <Rodape />
      
    </>
  );
};

export default Pagina;
