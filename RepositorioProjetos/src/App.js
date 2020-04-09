import './App.css';
import React from 'react';
import GridIdeas from './projetos-grid/GridIdeas';
import CadastroProjeto from './projetos-cadastro/CadastroProjeto';
import logo from './imgs/iconideialogo.svg';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Switch, Route } from 'react-router-dom';

function App() {
  return (

    <div className="App">

      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/">Projetos</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#CadastroProjeto">Cadastro</Nav.Link>
        </Nav>
        <img src={logo} className="App-logo-pequeno" alt="logo" />
      </Navbar>

      <Switch>
        <Route exact path="/">
          <GridIdeas />
        </Route>
        <Route exact path="/CadastroProjeto">
          <CadastroProjeto />
        </Route>
      </Switch>
    </div>

  );
}
export default App;
