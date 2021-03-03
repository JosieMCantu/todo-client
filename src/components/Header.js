import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                    <li><NavLink exact activeClassName="active" to="/LoginPage">Log In</NavLink></li>
                    <li><NavLink exact activeClassName="active" to="/SignupPage">Sign Up</NavLink></li>
                    <li><NavLink exact activeClassName="active" to="/ToDosListPage">Todo List</NavLink></li>
                </ul>
            </div>
        )
    }
}
