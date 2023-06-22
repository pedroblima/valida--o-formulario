import Pagina from '@/components/Pagina'
import React, { useEffect } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import axios from 'axios'
import avaliacaoValidator from '@/validators/avaliacaoValidator'
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
            axios.get('/api/avaliacao/' + query.id).then(resultado => {
                const avaliacao = resultado.data

                for (let atributo in avaliacao) {
                    setValue(atributo, avaliacao[atributo])
                }
            })
        }
    }, [query.id])

    function salvar(dados) {
        axios.put('/api/avaliacao/' + query.id, dados)
        push('/avaliacao')
    }

    return (
        <Pagina titulo="Avaliacao">
            <Form className='text-white'>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome Completo: </Form.Label>
                    <Form.Control
                        isInvalid={errors.nome}
                        type="text"
                        placeholder='digite a nome'
                        {...register('nome', avaliacaoValidator.nome)} />
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
                       
                        {...register('email', avaliacaoValidator.email)}  />
                    {
                        errors.email &&
                        <p className='text-danger'>{errors.email.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="nivel">
                    <Form.Label>Nivel de Conhecimento Sobre Concurso?</Form.Label>
                    <Form.Select aria-label="Default select example" {...register('nivel', avaliacaoValidator.nivel)}
                    >
                        <option>Escolha Um</option>
                        <option value="Basico">Basico</option>
                        <option value="Intermediario">Intermediario</option>
                        <option value="Avançado">Avançado</option>
                    </Form.Select>
                    {
                        errors.cpf &&
                        <p className='text-danger'>{errors.cpf.message}</p>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="pretende">
                    <Form.Label>Qual Concurso Voce Prentende Prestar? </Form.Label>
                    <Form.Control
                        isInvalid={errors.pretende}
                        type="text"
                        placeholder='digite o pretende'    
                        {...register('pretende', avaliacaoValidator.pretende)}></Form.Control>
                    {
                        errors.pretende &&
                        <p className='text-danger'>{errors.pretende.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="dificuldade">
                    <Form.Label>Principais dificuldade ao estudar?  </Form.Label>
                    <Form.Control
                        isInvalid={errors.dificuldade}
                        type="dificuldade"
                        placeholder='digite o dificuldade'
                       
                        {...register('dificuldade', avaliacaoValidator.dificuldade)}  />
                   
                    {
                        errors.cpf &&
                        <p className='text-danger'>{errors.dificuldade.message}</p>
                    }
                </Form.Group>


                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckLg className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/avaliacao">
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form