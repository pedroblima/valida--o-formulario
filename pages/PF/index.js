import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { BsFillTrash3Fill, BsPencilFill } from 'react-icons/bs'


const index = () => {

    const [PF, setPF] = useState([])

    useEffect(() => {
        getAll()
    }, [])

    function getAll() {
        axios.get('/api/PF').then(resultado => {
            setPF(resultado.data);
        })
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            axios.delete('/api/PF/' + id)
            getAll()
        }
    }

    return (
        <Pagina titulo="PF">

            <Link href="/PF/form" className='mb-2 btn btn-primary'>
                Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Nivel Escolar</th>
                        <th>Email</th>
                        <th>Pagamento</th>
                    </tr>
                </thead>
                <tbody>
                    {PF.map(item => (
                        <tr key={item.id}>
                            <td>
                                <Link href={'/PF/' + item.id}>
                                    <BsPencilFill title="Alterar" className='text-primary' />
                                </Link>
                                {' '}
                                <BsFillTrash3Fill title="Excluir" onClick={() => excluir(item.id)} className='text-danger' />
                            </td>
                            <td>{item.nome}</td>
                            <td>{item.CPF}</td>
                            <td>{item.nivel}</td>
                            <td>{item.email}</td>
                            <td>{item.pagamento}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}

export default index