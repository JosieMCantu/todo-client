import React, { Component } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
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

  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <HomePage {...routerProps} />}
            />
            <Route
              path="/LoginPage"
              exact
              render={(routerProps) => <LoginPage handleUserChange={this.state} {...routerProps} />}
            />
            <Route
              path="/SignupPage"
              exact
              render={(routerProps) => <SignupPage handleUserChange={this.handleUserChange}{...routerProps} />}
            />
            <Route
              path="/TodosListPage"
              exact
              render={(routerProps) => <TodosListPage {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}
