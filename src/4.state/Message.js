import React, { Component } from 'react'

class Message extends Component {
    constructor(){
        super()

        this.state = {
            name: "Uma",
            message: "Welcome User"
        }
    }

    subscribe(){
        this.setState({
            message: 'Thank you subscribing'
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button
                    className="btn btn-primary"
                    onClick={() =>this.subscribe()}
                >Subscribe
                </button>
            </div>
        )
    }
}

export default Message
