import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { BsFillTrash3Fill, BsPencilFill } from 'react-icons/bs'


const index = () => {

    const [preferencia, setpreferencia] = useState([])

    useEffect(() => {
        getAll()
    }, [])

    function getAll() {
        axios.get('/api/preferencia').then(resultado => {
            setpreferencia(resultado.data);
        })
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            axios.delete('/api/preferencia/' + id)
            getAll()
        }
    }

    return (
        <Pagina titulo="Preferencia">

            <Link href="/preferencia/form" className='mb-2 btn btn-primary'>
                Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>email</th>
                        <th>Estilo de Aprendizagem</th>
                        <th>Preferencia de Estudo</th>
                        <th>Recursos de Estudo preferido</th>
                    </tr>
                </thead>
                <tbody>
                    {preferencia.map(item => (
                        <tr key={item.id}>
                            <td>
                                <Link href={'/preferencia/' + item.id}>
                                    <BsPencilFill title="Alterar" className='text-primary' />
                                </Link>
                                {' '}
                                <BsFillTrash3Fill title="Excluir" onClick={() => excluir(item.id)} className='text-danger' />
                            </td>
                            <td>{item.nome}</td>
                            <td>{item.email}</td>
                            <td>{item.preferido}</td>
                            <td>{item.estuda}</td>
                            <td>{item.recursos}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}

export default index