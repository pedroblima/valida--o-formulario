import Pagina from '@/components/Pagina'
import React, { useEffect, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import axios from 'axios'
import recursoValidator from '@/validators/recursoValidator'



const form = () => {

    const { push, query } = useRouter();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const [recursosSelecionados, setRecursosSelecionados] = useState([]);
    const [eficienteSelecionados, setEficienteSelecionados] = useState([]);

    const opcoesRecursos = ['Livros', 'Apostilas', 'VideosAulas', 'Aplicativos', 'Simulados'];

    useEffect(() => {
        if (query.id) {
            axios.get('/api/recurso/' + query.id).then(resultado => {
                const recurso = resultado.data

                for (let atributo in recurso) {
                    setValue(atributo, recurso[atributo])
                }
            })
        }
    }, [query.id])
    
    
    const salvar = (dados) => {
        dados.recursos = recursosSelecionados;
        dados.recurso = eficienteSelecionados;
        axios.post('/api/recurso', dados);
        push('/recurso');
    };

    const handleCheckboxChange = (event) => {
        const valor = event.target.value;
        const isChecked = event.target.checked;

        if (isChecked) {
            setRecursosSelecionados([...recursosSelecionados, valor]);
        } else {
            const atualizados = recursosSelecionados.filter((recurso) => recurso !== valor);
            setRecursosSelecionados(atualizados);
        }
    };

    const handleCheckboxChanges = (event) => {
        const valor = event.target.value;
        const isChecked = event.target.checked;

        if (isChecked) {
            setEficienteSelecionados([...eficienteSelecionados, valor]);
        } else {
            const atualizados = eficienteSelecionados.filter((recurso) => recurso !== valor);
            setEficienteSelecionados(atualizados);
        }
    };

    return (
        <Pagina titulo="Recursos">
            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome Completo: </Form.Label>
                    <Form.Control
                        isInvalid={errors.nome}
                        type="text"
                        placeholder='digite a nome'
                        {...register('nome', recursoValidator.nome)} />
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

                        {...register('email', recursoValidator.email)} />
                    {
                        errors.email &&
                        <p className='text-danger'>{errors.email.message}</p>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="adicional">
                    <Form.Label>Recomendaria algum recurso adicional para os demais estudadntes?</Form.Label>
                    <Form.Control
                        isInvalid={errors.adicional}
                        type="text"
                        placeholder='digite o recurso'

                        {...register('adicional', recursoValidator.adicional)} />
                    {
                        errors.adicional &&
                        <p className='text-danger'>{errors.adicional.message}</p>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="frequencia">
                    <Form.Label>Quais Materias de Estudo voce utiliza com mais frequencia?</Form.Label>
                    {opcoesRecursos.map((recurso, index) => (
                        <Form.Check
                            key={index}
                            type="checkbox"
                            label={recurso}
                            name="recursos"
                            value={recurso}
                            checked={recursosSelecionados.includes(recurso)}
                            onChange={handleCheckboxChange}
                        />
                    ))}
                </Form.Group>

                <Form.Group className="mb-3" controlId="eficiente">
                    <Form.Label>Na sua opinião, qual recurso foi mais eficiente para sua preparação?</Form.Label>
                    {opcoesRecursos.map((recurso, index) => (
                        <Form.Check
                            key={index}
                            type="checkbox"
                            label={recurso}
                            name="recursos"
                            value={recursos}
                            checked={eficienteSelecionados.includes(recurso)}
                            onChange={handleCheckboxChanges}
                        />
                    ))}
                </Form.Group>

                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckLg className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/recurso">
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form