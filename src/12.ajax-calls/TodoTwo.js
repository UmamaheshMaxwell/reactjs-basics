import React, { Component } from 'react'
import axios from 'axios'

class TodosTwo extends Component {
    constructor(){
        super()

        this.state = {
            todos: []
        }
    }

    componentDidMount(){
        // fetch(`https://jsonplaceholder.typicode.com/todos`)
        // .then(response => response.json())
        // .then((data) => this.setState({todos: data}))

        axios(`https://jsonplaceholder.typicode.com/todos`)
        .then(response => this.setState({todos: response.data}))
    }

    render() {
        return (
            <div>

                    <table className="table">
                        <thead>
                            <tr>
                                <th>UserId</th>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Completed</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.todos.map(todo => (
                                <tr key={todo.id}>
                                    <td>{todo.userId}</td>
                                    <td>{todo.id}</td>
                                    <td>{todo.title}</td>
                                    <td>{todo.completed ? 'True': 'False'}</td>
                                </tr>
                            ))
                         } 
                        </tbody>

                    </table>

            </div>
        )
    }
}

export default TodosTwo
