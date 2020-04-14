import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "./services/auth";
import GridProjects from './components/project-grid/GridProjects';
import CadastroProjeto from './components/project-crud/CadastroProjeto';
import ContatoPage from './components/project-contact/ContatoPage';
import Home from './components/home/home';
import Login from './components/login/Login'
import About from './components/about/About'

import { CSSTransition, TransitionGroup } from 'react-transition-group';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                    <Redirect to={{ pathname: "/Login", state: { from: props.location } }} />
                )
        }
    />
);

const Routes = () => (
    <BrowserRouter>
        <TransitionGroup>
            <CSSTransition
                timeout={300}
                classNames='fade'>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <PrivateRoute exact path="/CadastroProjeto" component={CadastroProjeto} />
                    <PrivateRoute exact path="/ContatoPage" component={ContatoPage} />
                    <Route exact path="/Login" component={Login} />
                    <Route exact path="/About" component={About} />
                    <Route exact path="/GridProjects" component={GridProjects} />
                    <Route path="*" component={() => <h1>Page not found</h1>} />
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    </BrowserRouter>
);

export default Routes;


