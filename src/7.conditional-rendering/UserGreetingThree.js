import React, { Component } from 'react'

class UserGreetingThree extends Component {
    constructor(){
        super()

        this.state ={
            isLoggedIn: false
        }
    }

    render() {
        return (
            this.state.isLoggedIn &&
            <div>Welcome Uma Three</div> 
        )
    }
}

export default UserGreetingThree
