import Pagina from '@/components/Pagina'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import axios from 'axios'
import alunosValidator from '@/validators/alunosValidator'

const form = () => {

    const { push, query } = useRouter()
    const { register, handleSubmit, setValue } = useForm()

    useEffect(() => {
        if (query.id) {
            axios.get('/api/alunos/' + query.id).then(resultado => {
                const aluno = resultado.data

                for(let atributo in aluno){
                    setValue(atributo, aluno[atributo])
                }
            })
        }
    }, [query.id])

    function salvar(dados) {
        axios.put('/api/alunos/' + query.id, dados)
        push('/alunos')
    }

    return (
        <Pagina titulo="alunos">
             <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control
                    isInvalid={errors.nome} 
                    type="text" 
                    placeholder='digite a nome'
                    {...register('nome', alunosValidator.nome)} />
                    {
                        errors.nome &&
                        <p className='text-danger'>{errors.nome.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="cpf">
                    <Form.Label>CPF: </Form.Label>
                    <Form.Control as={IMaskInput}
                    mask='000.000.000-00'
                    isInvalid={errors.cpf} 
                    type="text" 
                    placeholder='digite a duração'
                    {...register('cpf', alunosValidator.cpf)} />
                    {
                        errors.cpf &&
                        <p className='text-danger'>{errors.cpf.message}</p>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="matricula">
                    <Form.Label>Matricula: </Form.Label>
                    <Form.Control as={IMaskInput}
                    mask='00000000000'
                    isInvalid={errors.matricula} 
                    type="text" 
                    placeholder='digite a duração'
                    {...register('matricula', alunosValidator.matricula)} />
                    {
                        errors.matricula &&
                        <p className='text-danger'>{errors.matricula.message}</p>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control                     
                    isInvalid={errors.email} 
                    type="text" 
                    placeholder='digite a duração'
                    {...register('email', alunosValidator.email)} />
                    {
                        errors.email &&
                        <p className='text-danger'>{errors.email.message}</p>
                    }
                </Form.Group>

                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckLg className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/alunoss">
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form

