import Pagina from '@/components/Pagina';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Row, Table } from 'react-bootstrap';

const Index = () => {


    const [feedback, setFeedback] = useState([]);
    const [avaliacao, setAvaliacao] = useState([]);
    const [recursos, setRecursos] = useState([]);
  
    useEffect(() => {
      getAllData();
    }, []);
  
    async function getAllData() {
      try {
        const feedbackResponse = await axios.get('/api/feedback');
        const avaliacaoResponse = await axios.get('/api/avaliacao');
        const recursosResponse = await axios.get('/api/recurso');
  
        setFeedback(feedbackResponse.data);
        setAvaliacao(avaliacaoResponse.data);
        setRecursos(recursosResponse.data);
      } catch (error) {
        console.error(error);
      }
    }
    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            axios.delete('/api/feedback/' + id)
            getAll()
        }
    }
    return (
        <Pagina titulo="Curso Preparatório para Concurso">
            <div className="jumbotron text-white">
                <h1>Bem-vindo ao Curso Preparatório para Concurso</h1>
                <p>
                    Aqui você encontrará o melhor conteúdo e suporte para se preparar e
                    obter sucesso nos concursos públicos.
                </p>
            </div>

            <h2 className='text-white'>Próximos Cursos</h2>
            <Table striped bordered>
                <thead className='text-white'>
                    <tr>
                        <th>Concurso</th>
                        <th>Data</th>
                        <th>Local</th>
                        <th>Faça Sua inscrição</th>
                    </tr>
                </thead>
                <tbody className='text-white'>
                    <tr >
                        <td>
                            <a href='https://concursosnobrasil.com/concurso/concurso-core-df/'>CORE DF</a>
                        </td>
                        <td className='text-white'>06/07/2023</td>
                        <td className='text-white'>Brasilia/DF</td>
                        <td>
                            <a href='https://www.institutoconsulplan.org.br/getConc.aspx?key=1Xt0KYAD7qA='>clique aqui</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href='https://concursosnobrasil.com/concurso/concurso-exercito-brasileiro/'>ESFCEx</a>
                        </td>
                        <td className='text-white'>12/06/2023</td>
                        <td >Brasil</td>
                        <td >
                            <a href='https://www.vunesp.com.br/EFCE2301'>clique aqui</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href='https://concursosnobrasil.com/concurso/vagas-de-estagio-no-ministerio-da-justica-e-seguranca-publica/'>MJSP</a>
                        </td>
                        <td className='text-white'>13/07/2023</td>
                        <td className='text-white'>Brasilia/DF</td>
                        <td>
                            <a href='https://pp.ciee.org.br/vitrine/10176/detalhe'>clique aqui</a>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <Row>
                <Col>

                    <h2 className='text-white'>Depoimentos</h2>
                    <div className="card-deck">
                        {feedback.map((item, index) => (
                            <div key={index} className="card">
                                <div className="card-body">
                                    <h5 className="card-title ">{item.nome} </h5>
                                    <p className="card-text">{item.aula}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Col>

                <Col>
                    <h2 className='text-white'>Cursos Mais Proucurados</h2>
                    <div className="card-deck">
                        {avaliacao.map((item, index) => (
                            <div key={index} className="card">
                                <div className="card-body">
                                    <p className="card-text">{item.pretende}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Col>
                <Col>
                    <h2 className='text-white'>Materiais mais ultilizados</h2>
                    <div className="card-deck">
                        {recursos.map((item, index) => (
                            <div key={index} className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{item.recurso} </h5>
                                    
                                </div>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </Pagina>
    );
};

export default Index;
