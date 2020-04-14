import React, { Component } from 'react';
import logo from '../../assets/iconideialogo.svg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class Home extends Component {

    constructor(props) {
        super(props);

        this.sendContact = this.sendContact.bind(this);
    }

    sendContact() {
        window.location = 'GridProjects';
    }

    render() {
        return (
            <div style={{
                backgroundColor: '#80ccff', height: '95vh',
                overflow: 'hidden', backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
                <div style={{
                    justifyContent: 'center', alignItems: 'center',
                    height: '100vh', display: 'flex', marginTop: '2em',
                    marginLeft: '15vw'
                }}>
                    <Container fluid="xs">
                        <Row>
                            <Col md='4' sm='2'>
                                <blockquote class="blockquote"><em>Um espaço onde você pode encontrar e cadastrar seus projetos. A ideia aqui é compartilhar ações e juntar esforços!
                                Você sabe se existe alguém pesquisando e desenvovendo o mesmo que você por esse Brasil a fora?
                                As pessoas sabem o que você está pesquisando e desenvendo?</em>
                                </blockquote>
                                <Button variant="secondary" onClick={this.sendContact}>Acessar lista de projetos</Button>{' '}
                            </Col>
                            <Col><img src={logo} height='400vh' alt="logo" /></Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default Home;
