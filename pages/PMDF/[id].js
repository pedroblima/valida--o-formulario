import Pagina from '@/components/Pagina'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import axios from 'axios'
import PMDFValidator from '@/validators/PMDFValidator'
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
            axios.get('/api/PMDF/' + query.id).then(resultado => {
                const PMDF = resultado.data

                for (let atributo in PMDF) {
                    setValue(atributo, PMDF[atributo])
                }
            })
        }
    }, [query.id])

    function salvar(dados) {
        axios.put('/api/PMDF/' + query.id, dados)
        push('/PMDF')
    }



    return (
        <Pagina titulo="PMDF">
            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control
                        isInvalid={errors.nome}
                        type="text"
                        placeholder='digite a nome'
                        {...register('nome', PMDFValidator.nome)} />
                    {
                        errors.nome &&
                        <p className='text-danger'>{errors.nome.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="nivel">
                    <Form.Label>Nivel Escolar: </Form.Label>
                    <Form.Select aria-label="Default select example" {...register('nivel')}
                    >
                        <option>Nivel Estudantil</option>
                        <option value="Fundamental">Ensino Fundamental</option>
                        <option value="Medio">Ensino Medio</option>
                        <option value="Superior">Ensino Superior</option>
                    </Form.Select>
                
                </Form.Group>
                <Form.Group className="mb-3" controlId="CPF">
                    <Form.Label>CPF: </Form.Label>
                    <Form.Control
                        isInvalid={errors.CPF}
                        type="text"
                        placeholder='digite a CPF'
                        mask='999.999.999-99'
                        {...register('CPF', PMDFValidator.CPF)}
                        onChange={handleChange} />
                    {
                        errors.CPF &&
                        <p className='text-danger'>{errors.CPF.message}</p>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control
                        isInvalid={errors.email}
                        type="text"
                        placeholder='digite a Email'
                        {...register('email', PMDFValidator.email)} />
                    {
                        errors.email &&
                        <p className='text-danger'>{errors.email.message}</p>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="pagamento">
                    <Form.Label>Forma de Pagamento: </Form.Label> 
                    <Form.Select aria-label="Default select example" {...register('pagamento')}
                        >
                        <option>Forma de pagamento </option>
                        <option value="PIX">PÌX</option>
                        <option value="Boleto">Boleto</option>
                        <option value="Cartao">Cartao</option>
                    </Form.Select>
                </Form.Group>

                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckLg className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/PMDF">
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form