import Pagina from '@/components/Pagina'
import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import axios from 'axios'
import feedbackValidator from '@/validators/feedbackValidator'
import { mask } from 'remask'


const form = () => {


    function handleChange(event) {

        const name = event.target.name
        const valor = event.target.value
        const mascara = event.target.getAttribute('mask')

        setValue(name, mask(valor, mascara))

    }


    const { push } = useRouter()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    function salvar(dados) {
        axios.post('/api/feedback', dados)
        push('/feedback')
    }

    return (
        <Pagina titulo="Feedback">
            <Form className='text-white'>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome Completo: </Form.Label>
                    <Form.Control
                        isInvalid={errors.nome}
                        type="text"
                        placeholder='digite a nome'
                        {...register('nome', feedbackValidator.nome)} />
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
                       
                        {...register('email', feedbackValidator.email)}  />
                    {
                        errors.email &&
                        <p className='text-danger'>{errors.email.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="aula">
                    <Form.Label>O Que Voce Achou do curso? </Form.Label>
                    <Form.Control
                    isInvalid={errors.aula}
                    type='text'
                    placeholder='digite a aula'
                    {...register('aula', feedbackValidator.aula)}
                    ></Form.Control>
                    {
                        errors.aula &&
                        <p className='text-danger'>{errors.aula.message}</p>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="topicos">
                    <Form.Label>Quais tópicos você gostaria de ver abordados na futuras aulas? </Form.Label>
                    <Form.Control
                        isInvalid={errors.topicos}
                        type="text"
                        placeholder='digite o topicos'    
                        {...register('topicos', feedbackValidator.topicos)}></Form.Control>
                    {
                        errors.topicos &&
                        <p className='text-danger'>{errors.topicos.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="comentario">
                    <Form.Label>Alguma sugestão adicional sobre as aulas do curso?  </Form.Label>
                    <Form.Control
                        isInvalid={errors.comentario}
                        type="comentario"
                        placeholder='digite o comentario'
                       
                        {...register('comentario', feedbackValidator.comentario)}  />
                   
                    {
                        errors.comentario &&
                        <p className='text-danger'>{errors.comentario.message}</p>
                    }
                </Form.Group>


                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckLg className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/feedback">
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form