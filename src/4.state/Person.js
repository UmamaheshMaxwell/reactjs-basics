import React, { Component } from 'react'

class Person extends Component {
    constructor(){
        super()

        this.state = {
            name: 'Uma',
            city: 'Hyderabad',
            isAdmin: false
        }
    }

    render() {
        const {name, city, isAdmin} = this.state
        return (
            <div>
                <h1>{name} is in {city} and is he an Admin {isAdmin? 'True': 'Flase'} </h1>
            </div>
        )
    }
}

export default Person
