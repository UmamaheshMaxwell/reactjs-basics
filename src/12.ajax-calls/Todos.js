import React, { Component } from 'react'

class Todos extends Component {
    constructor(){
        super()

        this.state = {
            todos: []
        }
    }

    componentDidMount(){
        fetch(`https://jsonplaceholder.typicode.com/todos`)
        .then(response => response.json())
        .then((data) => this.setState({todos: data}))
    }

    render() {
        return (
            <div>
               {
                  this.state.todos.map(todo => (
                       <ul key={todo.id}>
                           <li>{todo.userId}</li>
                           <li>{todo.id}</li>
                           <li>{todo.title}</li>
                           <li>{todo.completed ? 'True' : 'False'}</li>
                       </ul>
                   ))
               } 
            </div>
        )
    }
}

export default Todos
