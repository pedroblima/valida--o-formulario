import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { BsCheckLg } from 'react-icons/bs';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import axios from 'axios';
import preferenciaValidator from '@/validators/preferenciaValidator';
import Pagina from '@/components/Pagina';

const form = () => {
    
    
    const { push, query } = useRouter();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const [recursosSelecionados, setRecursosSelecionados] = useState([]);
    
    
    useEffect(() => {
        if (query.id) {
            axios.get('/api/preferencia/' + query.id).then(resultado => {
                const preferencia = resultado.data

                for (let atributo in preferencia) {
                    setValue(atributo, preferencia[atributo])
                }
            })
        }
    }, [query.id])


    const opcoesRecursos = ['Livros', 'Vídeos', 'Aulas presenciais', 'Aulas online', 'Simulados'];


    const salvar = (dados) => {
        dados.recursos = recursosSelecionados; // Adiciona os recursos selecionados ao objeto de dados
        axios.post('/api/preferencia', dados);
        push('/preferencia');
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



    return (
        <Pagina titulo="preferencia">
            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome Completo: </Form.Label>
                    <Form.Control
                        isInvalid={errors.nome}
                        type="text"
                        placeholder='digite a nome'
                        {...register('nome', preferenciaValidator.nome)} />
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

                        {...register('email', preferenciaValidator.email)} />
                    {
                        errors.email &&
                        <p className='text-danger'>{errors.email.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="preferido">
                    <Form.Label>Qual é seu estilo de Aprendizagem preferido ? </Form.Label>
                    <Form.Select aria-label="Default select example" {...register('preferido')}
                    >
                        <option>Escolha estilos</option>
                        <option value="visual">visual</option>
                        <option value="auditivo">auditivo</option>
                        <option value="leitura e escrita">leitura e escrita</option>
                        <option value="cinestésico">cinestésico</option>
                    </Form.Select>
                    {
                        errors.preferido &&
                        <p className='text-danger'>{errors.preferido.message}</p>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="estuda">
                    <Form.Label>Você Prefere estudar sozinho ou em grupo ?</Form.Label>
                    <Form.Select aria-label="Default select example" {...register('estuda')}
                    >
                        <option>Escolha uma opção</option>
                        <option value="sozinho">Sozinho</option>
                        <option value="grupo">Grupo</option>
                        <option value="nao tem preferencia">Nao tem preferencia</option>
                    </Form.Select>
                    {
                        errors.estuda &&
                        <p className='text-danger'>{errors.estuda.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="escala">
                    <Form.Label>Quais recursos de estudo você considera mais eficazes?</Form.Label>
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


                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckLg className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/preferencia">
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form