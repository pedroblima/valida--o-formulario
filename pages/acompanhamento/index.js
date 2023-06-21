import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { BsFillTrash3Fill, BsPencilFill } from 'react-icons/bs'


const index = () => {

    const [acompanhamento, setacompanhamento] = useState([])

    useEffect(() => {
        getAll()
    }, [])

    function getAll() {
        axios.get('/api/acompanhamento').then(resultado => {
            setacompanhamento(resultado.data);
        })
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            axios.delete('/api/acompanhamento/' + id)
            getAll()
        }
    }

    return (
        <Pagina titulo="Acompanhamento">

            <Link href="/acompanhamento/form" className='mb-2 btn btn-primary'>
                Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>email</th>
                        <th>materias que estudou</th>
                        <th>tempo de estudos</th>
                        <th>nivel de confiança nas materias</th>
                    </tr>
                </thead>
                <tbody>
                    {acompanhamento.map(item => (
                        <tr key={item.id}>
                            <td>
                                <Link href={'/acompanhamento/' + item.id}>
                                    <BsPencilFill title="Alterar" className='text-primary' />
                                </Link>
                                {' '}
                                <BsFillTrash3Fill title="Excluir" onClick={() => excluir(item.id)} className='text-danger' />
                            </td>
                            <td>{item.nome}</td>
                            <td>{item.email}</td>
                            <td>{item.materia}</td>
                            <td>{item.dedicou}</td>
                            <td>{item.escala}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}

export default index