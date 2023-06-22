import Pagina from '@/components/Pagina'
import React from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { BsCheckLg } from 'react-icons/bs'
import axios from 'axios'
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

  const handleLogin = async (data) => {
    try {
      const response = await axios.get('/api/login'); // Obter dados do banco de dados
      const exists = response.data.find(item => item.email === data.email && item.password === data.password);

      if (exists) {
        // Login bem-sucedido, redirecionar para a página de dashboard, por exemplo
        push('/');
      } else {
        // Login inválido, exibir mensagem de erro
        setLoginError(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Pagina titulo="Cadastro">
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Formulário de Cadastro</Card.Title>
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

                <Form.Group controlId="password">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control
                    isInvalid={errors.password || errors.login}
                    type="password"
                    placeholder="Digite a senha"
                    {...register('password',)}
                  />
                  {errors.password && (
                    <Form.Text className="text-danger">
                      {errors.password.message}
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
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Formulário de Login</Card.Title>
              <Form onSubmit={handleSubmit(handleLogin)}>
                <Form.Group controlId="email2">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    isInvalid={errors.email || errors.login}
                    type="email"
                    placeholder="Digite o email"
                    {...register('email2')}
                  />
                  {errors.email && (
                    <Form.Text className="text-danger">
                      {errors.email.message}
                    </Form.Text>
                  )}
                  {errors.login && (
                    <Form.Text className="text-danger">
                      Login inválido. Por favor, verifique suas informações.
                    </Form.Text>
                  )}
                </Form.Group>

                <Form.Group controlId="password2">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control
                    isInvalid={errors.password || errors.login}
                    type="password"
                    placeholder="Digite a senha"
                    {...register('password2')}
                  />
                  {errors.password && (
                    <Form.Text className="text-danger">
                      {errors.password.message}
                    </Form.Text>
                  )}
                </Form.Group>

                <div className="text-center">
                  <Button variant="primary" type="submit">
                    Entrar
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Pagina>
  )
}

export default form