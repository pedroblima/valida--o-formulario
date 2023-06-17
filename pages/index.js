// import Pagina from '@/components/Pagina'
// import Link from 'next/link'
// import React from 'react'
// import { Button, Card, Col, Row } from 'react-bootstrap'

// const index = () => {
//   return (
//     <Pagina titulo='Curso Preparatorio Para Concurso'>
//       <Row>
//         <Col>
//           <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src="https://yt3.googleusercontent.com/thHgvDEcKZzY_ChzoMI8nfTSA3oJgbHgalxC63B5eSj88QASPLAYAeL9zZRwgiHQIoaZNYHuPQ=s900-c-k-c0x00ffffff-no-rj" />
//             <Card.Body>
//               <Card.Title>Curso PMDF</Card.Title>
//               <Card.Text>
//               A Polícia Militar do Distrito Federal é o órgão de segurança pública responsável pelo policiamento ostensivo.
//               </Card.Text>
//               <Link className="ms-2 " href="/PMDF/form">
//                 <Button variant="primary">Faça Sua Inscrição</Button>
//               </Link>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col>
//           <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlBe6z49YR5lD6Tv0MJgBMILROhDDZHxFTng&usqp=CAU" />
//             <Card.Body>
//               <Card.Title> PCDF</Card.Title>
//               <Card.Text>
//                 Polícia Civil do Distrito Federal (PCDF) é órgão do sistema de segurança pública, a qual compete, nos termos do artigo 144, § 4º, da Constituição Federal, as funções de polícia judiciária e a apuração de infrações penais
//               </Card.Text>
//               <Link className="ms-2 " href="/PCDF/form">
//                 <Button variant="primary">Faça Sua Inscrição</Button>
//               </Link>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col>
//           <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src="data:image/png;base64,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" />
//             <Card.Body>
//               <Card.Title>PMERJ</Card.Title>
//               <Card.Text>
//                 SA Polícia Militar do Estado do Rio de Janeiro tem, por função primordial, o policiamento ostensivo e a preservação da ordem pública no Estado do Rio de Janeiro
//               </Card.Text>
//               <Link className="ms-2 " href="/PMERJ/form">
//                 <Button variant="primary">Faça Sua inscrição</Button>
//               </Link>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col>
//           <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src="https://assets.infra.grancursosonline.com.br/projeto/pf.jpg" />
//             <Card.Body>
//               <Card.Title>PF</Card.Title>
//               <Card.Text>
//                 A Polícia Federal do Brasil, ou Departamento de Polícia Federal, é uma instituição policial brasileira, subordinada ao Ministério da Justiça e Segurança Pública  que, de acordo com a Constituição de 1988.
//               </Card.Text>
//               <Link className="ms-2 " href="/PF/form">
//                 <Button variant="primary">Faça Sua Inscrição</Button>
//               </Link>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col className='mt-3'>
//           <Card style={{ width: '18rem', paddingTop: '1rem'}}>
//             <Card.Img variant="top" src="https://www.seguranca.go.gov.br/wp-content/uploads/2020/08/portaria-n-0424-20-institui-novo-brasao-da-sptc-1-239x300.png" />
//             <Card.Body>
//               <Card.Title> SPTC</Card.Title>
//               <Card.Text>
//                 A Superintendência de Polícia Técnico-Científica é o Órgão de Atividades Técnico-Científicas da Polícia do Estado de Goiás, conforme a Constituição Estadual goiana. 
//               </Card.Text>
//               <Link className="ms-2 " href="/SPTC/form">
//                 <Button variant="primary">Faça Sua inscrição</Button>
//               </Link>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Pagina>
//   )
// }

// export default index
