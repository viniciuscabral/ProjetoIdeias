import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import logo from '../../assets/iconideialogo.svg'

class ProjectCard extends Component {

    constructor(props) {
        super(props);
        this.sendContact = this.sendContact.bind(this);
    };

    sendContact() {
        window.location = 'ContatoPage';
    }

    render() {
        return (
            <div style={{ width: "100%" }}>
                <>
                    <Card>
                        <Card.Header><img src={logo} className="App-logo-pequeno" alt="logo" /> {' '}{' '}{this.props.dados.title}{' '}{' '}<img src={logo} className="App-logo-pequeno" alt="logo" /></Card.Header>
                        <Card.Body>
                            <Container >
                                <Row>
                                    <blockquote >
                                        <p style={{ textAlign: "justify" }}>
                                            {' '}
                                            {this.props.dados.desc}
                                            {' '}
                                        </p>
                                    </blockquote>
                                </Row>
                                <Row >
                                    <Col>
                                        <footer className="blockquote-footer">
                                            Tags: <cite title="Source Title">
                                                {this.props.dados.tags.map((projeto) =>
                                                    <a>{' '}{projeto}</a>
                                                )}
                                            </cite>
                                            <br></br>
                                            <a href={this.props.dados.link}>{this.props.dados.link}</a>
                                        </footer>
                                    </Col>
                                </Row>
                                <br></br>
                                <Row xs='auto' md='auto' float="center">
                                    <Col>
                                        <Button variant="outline-info" onClick={this.sendContact} >Entre em contato</Button>
                                    </Col>
                                </Row>
                            </Container>
                        </Card.Body>
                    </Card>
                    <br />
                </>
            </div >
        );
    }
}
export default ProjectCard;