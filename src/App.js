import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import classes from './App.css';
import CustomerInfo from './containers/CustomerInfo/CustomerInfo';
import logo from './logo.svg';


class App extends Component {
    render() {
        return (
            <div className={classes.App}>
                <header className={classes.AppHeader}>
                    <img src={logo} className={classes.AppLogo} alt="logo" />
                    <h1 className={classes.AppTitle}>Welcome to Responsive App Demo</h1>
                </header>
                <Switch >
                    <Route path="/responsive-demo" exact component={CustomerInfo} />
                    <Redirect to="/responsive-demo" />
                </Switch>
            </div>
        );
    }
}

export default App;
