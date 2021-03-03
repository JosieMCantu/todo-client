import React, { Component } from 'react'
import { loginUser } from '../components/app-utils.js';


export default class LoginPage extends Component {
    state = {
        email: '',
        password: ''
    }

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value })
    }

    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const user = await loginUser(
            this.state.email,
            this.state.password
        );
        this.props.handleUserChange(user);
        this.props.history.push('/TodosListPage');
    }

    render() {
        return (
            <div><p>Log In Page</p>
                <form onSubmit={this.handleSubmit}>
                    <label>Email:
                        <input value={this.state.email} onChange={this.handleEmailChange} />
                    </label>
                    <label>Password:
                        <input value={this.state.password} onChange={this.handlePasswordChange} /></label>
                    <button>SUBMIT</button>
                </form>
            </div>
        )
    }
}
