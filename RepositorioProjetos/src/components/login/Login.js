import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import { login } from "../../services/auth";
import Form from 'react-bootstrap/Form';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            error: ""
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        const name = e.target.name;
        this.setState({ [name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const { email, password } = this.state;
        if (!email || !password) {
            this.setState({ error: "Preencha e-mail e senha para continuar!" });
        } else {
            login("vinicius");
            this.props.history.push('/');
            // try {
            //     const response = await api.post("/sessions", { email, password });
            //     login(response.data.token);
            //     this.props.history.push("/app");
            // } catch (err) {
            //     this.setState({
            //         error:
            //             "Houve um problema com o login, verifique suas credenciais. T.T"
            //     });
            // }
        }
    };

    render() {
        return (
            <Container fluid="md">
                <Form onSubmit={this.onSubmit}>
                    <h3>Sign In</h3>
                    {this.state.error && <p>{this.state.error}</p>}
                    <Form.Group>
                        <label>Email address</label>
                        <Form.Control required type="email" className="form-control" placeholder="Enter email" name="email" onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <label>Password</label>
                        <Form.Control required type="password" className="form-control" placeholder="Enter password" name="password" onChange={this.handleChange} />
                    </Form.Group>


                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                </Form>
            </Container>
        );
    }
};
export default Login;