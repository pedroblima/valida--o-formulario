import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { BsFillTrash3Fill, BsPencilFill } from 'react-icons/bs'


const index = () => {

    const [avaliacao, setavaliacao] = useState([])

    useEffect(() => {
        getAll()
    }, [])

    function getAll() {
        axios.get('/api/avaliacao').then(resultado => {
            setavaliacao(resultado.data);
        })
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            axios.delete('/api/avaliacao/' + id)
            getAll()
        }
    }

    return (
        <Pagina titulo="Avaliacao">

            <Link href="/avaliacao/form" className='mb-2 btn btn-primary'>
                Novo
            </Link>

            <Table striped bordered hover>
                <thead className='text-white'>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Prentende Prestar</th>
                        <th>Nivel de Conhecimento</th>
                        <th>Dificuldades ao Estudar</th>
                    </tr>
                </thead>
                <tbody>
                    {avaliacao.map(item => (
                        <tr key={item.id} className='text-white' >
                            <td>
                                <Link href={'/avaliacao/' + item.id}>
                                    <BsPencilFill title="Alterar" className='text-primary' />
                                </Link>
                                {' '}
                                <BsFillTrash3Fill title="Excluir" onClick={() => excluir(item.id)} className='text-danger' />
                            </td>
                            <td className='text-white'>{item.nome}</td>
                            <td className='text-white'>{item.email}</td>
                            <td className='text-white'>{item.pretende}</td>
                            <td className='text-white'>{item.nivel}</td>
                            <td className='text-white'>{item.dificuldade}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}

export default index