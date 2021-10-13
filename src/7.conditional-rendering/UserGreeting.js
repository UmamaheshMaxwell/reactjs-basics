import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(){
        super()

        this.state ={
            isLoggedIn: true
        }
    }

    render() {
        if(this.state.isLoggedIn){
            return (
                <div>
                    Welcome Uma
                </div>
            )
        } else {
            return (
                <div>
                    Welcome Guest
                </div>
            )
        }
    }
}

export default UserGreeting
