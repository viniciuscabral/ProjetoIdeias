import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "./services/auth";
import GridProjects from './components/project-grid/GridProjects';
import CadastroProjeto from './components/project-crud/CadastroProjeto';
import ContatoPage from './components/project-contact/ContatoPage';
import Login from './components/login/Login'

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
        <Switch>
            <Route exact path="/" component={GridProjects} />
            <PrivateRoute exact path="/CadastroProjeto" component={CadastroProjeto} />
            <PrivateRoute exact path="/ContatoPage" component={ContatoPage} />
            <Route exact path="/Login" component={Login} />
            <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;


