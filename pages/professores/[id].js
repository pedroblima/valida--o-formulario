import Pagina from '@/components/Pagina'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import axios from 'axios'
import professoresValidator from '@/validators/professoresValidator'
import { productionBrowserSourceMaps } from '@/next.config'

const form = () => {

    const { push, query } = useRouter()
    const { register, handleSubmit, setValue } = useForm()

    useEffect(() => {
        if (query.id) {
            axios.get('/api/professores/' + query.id).then(resultado => {
                const professor = resultado.data

                for(let atributo in professor){
                    setValue(atributo, professor[atributo])
                }
            })
        }
    }, [query.id])

    function salvar(dados) {
        axios.put('/api/professores/' + query.id, dados)
        push('/professores')
    }

    return (
        <Pagina titulo="professores">
            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control 
                    isInvalid={errors.nome} 
                    type="text" 
                    placeholder='digite a duração'
                    {...register('nome', professoresValidator.nome)} />
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
                    placeholder='digite a cpf'
                    {...register('cpf', professoresValidator.cpf)} />
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
                    {...register('matricula', professoresValidator.matricula)} />
                    {
                        errors.matricula &&
                        <p className='text-danger'>{errors.matricula.message}</p>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="salario">
                    <Form.Label>Salario: </Form.Label>
                    <Form.Control as={IMaskInput}
                    mask='00000000,00'
                    isInvalid={errors.salario} 
                    type="text" 
                    placeholder='digite a duração'
                    {...register('salario', professoresValidator.salario)} />
                    {
                        errors.salario &&
                        <p className='text-danger'>{errors.salario.message}</p>
                    }
                </Form.Group>

                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckLg className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/professores">
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form

