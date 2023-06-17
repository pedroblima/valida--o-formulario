import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { BsFillTrash3Fill, BsPencilFill } from 'react-icons/bs'


const index = () => {

    const [recurso, setrecurso] = useState([])

    useEffect(() => {
        getAll()
    }, [])

    function getAll() {
        axios.get('/api/recurso').then(resultado => {
            setrecurso(resultado.data);
        })
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            axios.delete('/api/recurso/' + id)
            getAll()
        }
    }

    return (
        <Pagina titulo="Recursos">

            <Link href="/recurso/form" className='mb-2 btn btn-primary'>
                Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Recurso adicional recomendado</th>
                        <th>Materias de estudo mais utilizado</th>
                        <th>Recurso mais eficiente</th>
                    </tr>
                </thead>
                <tbody>
                    {recurso.map(item => (
                        <tr key={item.id}>
                            <td>
                                <Link href={'/recurso/' + item.id}>
                                    <BsPencilFill title="Alterar" className='text-primary' />
                                </Link>
                                {' '}
                                <BsFillTrash3Fill title="Excluir" onClick={() => excluir(item.id)} className='text-danger' />
                            </td>
                            <td>{item.nome}</td>
                            <td>{item.email}</td>
                            <td>{item.adicional}</td>
                            <td>{item.recursos}</td>
                            <td>{item.recurso}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}

export default index