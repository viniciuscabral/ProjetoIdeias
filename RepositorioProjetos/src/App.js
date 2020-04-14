import './App.css';
import React, { Component } from 'react';
import logo from './assets/iconideialogo.svg';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Routes from "./routes";
import { isAuthenticated, logout, login } from "./services/auth";
import Button from 'react-bootstrap/Button';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = [];
  };

  componentDidMount() {
    isAuthenticated() ? this.setState({ isLoged: true }) : this.setState({ isLoged: false });
    console.log(this.state.isLoged);
  }

  render() {
    return (
      <div className="App" >

        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="/">Projetos</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/CadastroProjeto">Cadastro</Nav.Link>
            <Nav.Link href="/About">Sobre</Nav.Link>

          </Nav>
          <img src={logo} className="App-logo-pequeno" alt="logo" />

          {this.state.isLoged ?
            <Button variant="info" onClick={() => logout()}>Log out</Button>
            :
            <Button variant="info" href="/Login"  >Log in</Button>}

        </Navbar>

        <Routes />
      </div>

    );
  }
}
export default App;
