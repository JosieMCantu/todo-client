import React, { Component } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute.js';
import LoginPage from './AuthPages/LoginPage.js';
import HomePage from './Home/Home.js';
import Header from './components/Header.js';
import SignupPage from './AuthPages/SignupPage.js';
import TodosListPage from './ToDosPage/TodosListPage.js';
import { getUserLocalStorage, userInLocalStorage } from './components/app-utils.js';


export default class App extends Component {
  state = {
    user: getUserLocalStorage()
  };

  handleUserChange = (user) => {
    this.setState({ user });
    userInLocalStorage(user);
  }
  handleLogout = () => {
    this.handlerUserChange();
  }

  render() {
    const { user } = this.state;
    return (
      <div>
        <Router>
          <Header
            user={this.state.user} handleLogout={this.handleLogout} />
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <HomePage {...routerProps} />}
            />
            <Route
              path="/LoginPage"
              exact
              render={(routerProps) => <LoginPage handleUserChange={this.handleUserChange} {...routerProps} />}
            />
            <Route
              path="/SignupPage"
              exact
              render={(routerProps) => <SignupPage handleUserChange={this.handleUserChange}{...routerProps} />}
            />
            <PrivateRoute
              path="/TodosListPage"
              exact
              token={user && user.token}
              render={(routerProps) => <TodosListPage user={this.state.user}{...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}
