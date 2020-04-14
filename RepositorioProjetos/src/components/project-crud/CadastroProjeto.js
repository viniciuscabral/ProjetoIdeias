import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Alert from 'react-bootstrap/Alert';
import api from '../../services/api'

class CadastroProjeto extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tags: []
        };

        this.addTag = this.addTag.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    addTag(e) {
        var tags = this.state.tags;
        tags.push("#" + this.state.input.toUpperCase());
        this.setState({ tag: tags });
        console.log(tags);
        this.setState({
            input: ""
        });
    }

    handleChange(e) {
        const name = e.target.name;
        this.setState({ [name]: e.target.value });
    }

    async onSubmit(e) {
        e.preventDefault();
        var alertErro = "";
        if (this.state.tags.length < 1) {
            alertErro = <Alert variant="danger" dismissible>
                <Alert.Heading>Erro ao inserir registro</Alert.Heading>
                <p>
                    As tags são muito importantes para a recuperação do seu projeto.
                    Escolha ao menos três para conseguir concluir o cadastro.
              </p>
            </Alert>
        }
        else {
            const dados = this.state;
            await api.post("/projetos", JSON.stringify(dados), { headers: { 'Content-Type': 'application/json' } })
                .then(result => {
                    this.setState({
                        response: result,
                        isAddProduct: false
                    });
                    alertErro = <Alert variant="success">
                        Cadastro realizado com sucesso!</Alert>

                },
                    (error) => {
                        alert("erro");
                        this.setState({ error });
                    }
                )
            this.setState({
                status: alertErro
            });
        }
    }

    render() {
        return (
            <div>
                <Container>
                    {this.state.status}
                    <h1>Cadastro de Projeto</h1>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Título</Form.Label>
                            <Form.Control required type="text" name="title" placeholder="Digite o nome do seu projeto" onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Descrição do projeto</Form.Label>
                            <Form.Control required as="textarea" name="desc" rows="8" placeholder="Digite uma preve ideia do projeto" onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Link do projeto</Form.Label>
                            <Form.Control required type="text" name="link" placeholder="link do website ou rede social" onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group md="4" controlId="validationCustomUsername">
                            <Form.Label>Username</Form.Label>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroupPrepend">#</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    name="input"
                                    onChange={this.handleChange}
                                    value={this.state.input}
                                    type="text"
                                    placeholder="tag"
                                    aria-describedby="inputGroupPrepend" />
                                <Button variant="success" onClick={this.addTag} >+</Button>{' '}
                            </InputGroup>
                            {this.state.tags.map((tag) =>
                                <Button style={{
                                    "border-radius": "30px", "list-style": "none",
                                    "display": "inline-block", "padding": "0.25rem 0.75rem", "margin": "2px"
                                }} variant="outline-primary">{tag} </Button>
                            )}
                        </Form.Group>
                        <Button variant="success" type="submit">Salvar</Button>{' '}
                    </Form>
                </Container>
            </div>
        );
    }
}
export default CadastroProjeto;