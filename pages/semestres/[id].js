import Pagina from '@/components/Pagina'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import axios from 'axios'
import semestresValidator from '@/validators/semestresValidator'
import { IMaskInput } from 'react-imask'

const form = () => {

    const { push, query } = useRouter()
    const { register, handleSubmit, setValue } = useForm()

    useEffect(() => {
        if (query.id) {
            axios.get('/api/semestres/' + query.id).then(resultado => {
                const semestre = resultado.data

                for(let atributo in semestre){
                    setValue(atributo, semestre[atributo])
                }
            })
        }
    }, [query.id])

    function salvar(dados) {
        axios.put('/api/semestres/' + query.id, dados)
        push('/semestres')
    }

    return (
        <Pagina titulo="semestres">
            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control isInvalid={errors.nome} 
                    type="text" 
                    placeholder='digite a nome'
                    {...register('nome', semestresValidator.nome)} />
                    {
                        errors.nome &&
                        <p className='text-danger'>{errors.nome.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="datai">
                    <Form.Label>Data de Inicio: </Form.Label>
                    <Form.Control as={IMaskInput}
                    mask='00/00/0000'
                    isInvalid={errors.datai} 
                    type="text" 
                    placeholder='digite a datai'
                    {...register('datai', salasValidator.datai)} />
                    {
                        errors.tipo &&
                        <p className='text-danger'>{errors.datai.message}</p>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="dataf">
                    <Form.Label>Data de Fim: </Form.Label>
                    <Form.Control as={IMaskInput}
                    mask='00/00/0000'
                    isInvalid={errors.dataf} 
                    type="text" 
                    placeholder='digite a dataf'
                    {...register('dataf', salasValidator.dataf)} />
                    {
                        errors.tipo &&
                        <p className='text-danger'>{errors.dataf.message}</p>
                    }
                </Form.Group>
          

                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckLg className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/semestress">
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form

