import Pagina from '@/components/Pagina'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import axios from 'axios'
import salasValidator from '@/validators/salasValidator'

const form = () => {

    const { push } = useRouter()
    const { register, handleSubmit } = useForm()

    function salvar(dados) {
        axios.post('/api/salas', dados)
        push('/salas')
    }

    return (
        <Pagina titulo="salas">
             <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control 
                    isInvalid={errors.nome} 
                    type="text" 
                    placeholder='digite a nome'
                    {...register('nome', salasValidator.nome)} />
                    {
                        errors.nome &&
                        <p className='text-danger'>{errors.nome.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="capacidade">
                    <Form.Label>Capacidade: </Form.Label>
                    <Form.Control isInvalid={errors.capacidade} 
                    type="text" 
                    placeholder='digite a capacidade'
                    {...register('capacidade', salasValidator.capacidade)} />
                    {
                        errors.capacidade &&
                        <p className='text-danger'>{errors.capacidade.message}</p>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="tipo">
                    <Form.Label>Tipo: </Form.Label>
                    <Form.Control isInvalid={errors.tipo} 
                    type="text" 
                    placeholder='digite a tipo'
                    {...register('tipo', salasValidator.tipo)} />
                    {
                        errors.tipo &&
                        <p className='text-danger'>{errors.tipo.message}</p>
                    }
                </Form.Group>

                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckLg className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/salass">
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form