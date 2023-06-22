import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { BsFillTrash3Fill, BsPencilFill } from 'react-icons/bs'


const index = () => {

    const [feedback, setfeedback] = useState([])

    useEffect(() => {
        getAll()
    }, [])

    function getAll() {
        axios.get('/api/feedback').then(resultado => {
            setfeedback(resultado.data);
        })
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            axios.delete('/api/feedback/' + id)
            getAll()
        }
    }

    return (
        <Pagina titulo="Feedback">

            <Link href="/feedback/form" className='mb-2 btn btn-primary'>
                Novo
            </Link>

            <Table striped bordered hover>
                <thead className='text-white'>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>email</th>
                        <th>Aula mais util</th>
                        <th>sugestao sobre as aulas</th>
                        <th>Topicos para ser abordado nas proximas aulas</th>
                    </tr>
                </thead>
                <tbody className='text-white'>
                    {feedback.map(item => (
                        <tr key={item.id}>
                            <td>
                                <Link href={'/feedback/' + item.id}>
                                    <BsPencilFill title="Alterar" className='text-primary' />
                                </Link>
                                {' '}
                                <BsFillTrash3Fill title="Excluir" onClick={() => excluir(item.id)} className='text-danger' />
                            </td>
                            <td className='text-white'>{item.nome}</td>
                            <td className='text-white'>{item.email}</td>
                            <td className='text-white'>{item.aula}</td>
                            <td className='text-white'>{item.comentario}</td>
                            <td className='text-white'>{item.topicos}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}

export default index