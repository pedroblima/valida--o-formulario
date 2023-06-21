import Pagina from '@/components/Pagina'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import axios from 'axios'
import acompanhamentoValidator from '@/validators/acompanhamentoValidator'
import { mask } from 'remask'

const form = () => {

    function handleChange(event) {

        const name = event.target.name
        const valor = event.target.value
        const mascara = event.target.getAttribute('mask')

        setValue(name, mask(valor, mascara))

    }

    const { push, query } = useRouter()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    useEffect(() => {
        if (query.id) {
            axios.get('/api/acompanhamento/' + query.id).then(resultado => {
                const acompanhamento = resultado.data

                for (let atributo in acompanhamento) {
                    setValue(atributo, acompanhamento[atributo])
                }
            })
        }
    }, [query.id])

    function salvar(dados) {
        axios.put('/api/acompanhamento/' + query.id, dados)
        push('/acompanhamento')
    }



    return (
        <Pagina titulo="Acompanhamento">
            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome Completo: </Form.Label>
                    <Form.Control
                        isInvalid={errors.nome}
                        type="text"
                        placeholder='digite a nome'
                        {...register('nome', acompanhamentoValidator.nome)} />
                    {
                        errors.nome &&
                        <p className='text-danger'>{errors.nome.message}</p>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control
                        isInvalid={errors.email}
                        type="email"
                        placeholder='digite o Email'
                       
                        {...register('email', acompanhamentoValidator.email)}  />
                    {
                        errors.email &&
                        <p className='text-danger'>{errors.email.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="materia">
                    <Form.Label>Quais materias Voce Estudou recentemente ? </Form.Label>
                    <Form.Control
                        isInvalid={errors.materia}
                        type="text"
                        placeholder='digite as materia'    
                        {...register('materia', acompanhamentoValidator.materia)}></Form.Control>
                    {
                        errors.materia &&
                        <p className='text-danger'>{errors.materia.message}</p>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="dedicou">
                    <Form.Label>Quanto tempo se dedicou nos ultimos sete dias? </Form.Label>
                    <Form.Control
                        isInvalid={errors.dedicou}
                        type="text"
                        placeholder='digite o tempo'    
                        {...register('dedicou', acompanhamentoValidator.dedicou)}></Form.Control>
                    {
                        errors.dedicou &&
                        <p className='text-danger'>{errors.dedicou.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="escala">
                    <Form.Label>Em uma escala de 01 a 10, qual o seu nivel de confiaça nas materias?  </Form.Label>
                    <Form.Control
                        isInvalid={errors.escala}
                        mask='00'
                        type="text"
                        placeholder='digite o escala'
                       onChange={handleChange}
                        {...register('escala', acompanhamentoValidator.escala)}  />
                   
                    {
                        errors.escala &&
                        <p className='text-danger'>{errors.escala.message}</p>
                    }
                </Form.Group>


                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckLg className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/acompanhamento">
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form