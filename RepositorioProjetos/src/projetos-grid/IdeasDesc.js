import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

class IdeasDescp extends Component {

    render() {
        return (
            <div style={{ width: "100%" }}>
                <>
                    <Card style={{ margin: "5px" }}>
                        <Card.Header>{this.props.dados.title}</Card.Header>
                        <Card.Body>
                            <Container fluid>
                                <Row>
                                    <Col xs={3} style={{ margin: "auto" }}>
                                        <Image style={{ width: "6rem" }} src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22171%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20171%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17150644c75%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17150644c75%22%3E%3Crect%20width%3D%22171%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2260.8828125%22%20y%3D%2295.1%22%3E171x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" roundedCircle />
                                        <footer className="blockquote-footer">
                                            Tags: <cite title="Source Title">
                                                {this.props.dados.tags.map((x) =>
                                                    <a>{' '}{x}</a>
                                                )}
                                            </cite>
                                            <br></br>
                                            <a href={this.props.dados.link}>{this.props.dados.link}</a>
                                        </footer>
                                        <br></br>
                                        <Button variant="outline-info">Entre em contato.</Button>
                                    </Col>
                                    <Col xs={9}>
                                        <blockquote >
                                            <p style={{ textAlign: "justify" }}>
                                                {' '}
                                                {this.props.dados.desc}
                                                {' '}
                                                {' '}

                                            </p>
                                        </blockquote>
                                    </Col>

                                </Row>
                            </Container>
                        </Card.Body>

                    </Card>

                    <br />
                </>

            </div>
        );
    }
}
export default IdeasDescp;