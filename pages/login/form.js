import Pagina from '@/components/Pagina'
import React from 'react'
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

  const { push } = useRouter()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm()

  async function salvar(dados) {
    try {
      const { data } = await axios.get('/api/login')
      const exists = data.find(item => item.email === dados.email && item.cpf === dados.cpf)

      if (exists) {
        // Já existe um registro com as mesmas informações
        alert('As mesmas informações já estão cadastradas.')
        return
      }

      // Se não houver correspondência, salva os dados
      axios.post('/api/login', dados)
      alert('Cadastro realizado com sucesso!')
    } catch (error) {
      console.error(error)
    }
  }



  return (
    <Pagina titulo="Cadastro">
      <Card>
        <Card.Body>
          <Card.Title>Formulário de Login e Cadastro</Card.Title>
          <Form onSubmit={handleSubmit(salvar)}>
            <Form.Group controlId="nome">
              <Form.Label>Nome Completo</Form.Label>
              <Form.Control
                isInvalid={errors.nome}
                type="text"
                placeholder="Digite o nome completo"
                {...register('nome',)}
              />
              {errors.nome && (
                <Form.Text className="text-danger">
                  {errors.nome.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                isInvalid={errors.email}
                type="email"
                placeholder="Digite o email"
                {...register('email',)}
              />
              {errors.email && (
                <Form.Text className="text-danger">
                  {errors.email.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group controlId="cpf">
              <Form.Label>CPF</Form.Label>
              <Form.Control
                isInvalid={errors.cpf}
                type="text"
                placeholder="Digite o CPF"
                {...register('cpf',)}
                onChange={handleChange}
                mask="999.999.999-99"
              />
              {errors.cpf && (
                <Form.Text className="text-danger">
                  {errors.cpf.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group controlId="dataNascimento">
              <Form.Label>Data de Nascimento</Form.Label>
              <Form.Control
                isInvalid={errors.dataNascimento}
                type="text"
                placeholder="Digite a data de nascimento"
                {...register('dataNascimento',)}
                onChange={handleChange}
                mask="99/99/9999"
              />
              {errors.dataNascimento && (
                <Form.Text className="text-danger">
                  {errors.dataNascimento.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group controlId="telefone">
              <Form.Label>Número de Telefone</Form.Label>
              <Form.Control
                isInvalid={errors.telefone}
                type="text"
                placeholder="Digite o número de telefone"
                {...register('telefone',)}
                onChange={handleChange}
                mask="(99) 99999-9999"
              />
              {errors.telefone && (
                <Form.Text className="text-danger">
                  {errors.telefone.message}
                </Form.Text>
              )}
            </Form.Group>

            <div className="text-center">
              <Button variant="success" onClick={handleSubmit(salvar)}>
                <BsCheckLg className="me-2" />
                Salvar
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Pagina>
  )
}

export default form