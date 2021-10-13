import React, { Component } from 'react'

class UserGreetingTwo extends Component {
    constructor(){
        super()

        this.state ={
            isLoggedIn: true
        }
    }

    render() {
        return (
            this.state.isLoggedIn ?
            <div>Welcome Uma Two</div> :
            <div>Welcome Guest Two</div>
        )
    }
}

export default UserGreetingTwo
