import React, { Component } from 'react'
import { getTodo } from '../components/app-utils.js';

export default class TodosListPage extends Component {
    state = {
        todos: []
    }
    componentDidMount = async () => {
        const todos = await getTodo(this.props.user.token);
        this.setState({ todos });
    }
    handleSubmit = () => {

    }
    render() {
        console.log(this.state.todos);
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.todos} />
                    <button>Add a todo</button>
                </form>
                {this.state.todos.length && <p>'You have nothing to do'</p>}
                {this.state.todos.map(todo =>
                    <p>{todo.todo} : {todo.completed ? 'Finished' : 'Not finished'}</p>)}

                todos list page
            </div>
        )
    }
}
