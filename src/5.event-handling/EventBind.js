import React, { Component } from 'react'

class EventBind extends Component {
    constructor(){
        super()

        this.state = {
            message: 'Hello'
        }
        // 3rd Approach
        //this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message: 'Thank You'
    //     })
    // }

    // 4th Approach
    clickHandler = () => {
        this.setState({
            message: 'Thank You'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* 1st Approach */}
               <button className="btn btn-primary"
                       onClick={this.clickHandler.bind(this)}
               >Event Click - Bind</button> 
               <br /> <br />
               {/* 2nd Approach */}
               <button className="btn btn-primary"
                       onClick={()=>this.clickHandler()}
               >Event Click - Fat Arrow</button> 

                {/* 3rd Approach Approach */}
                <br /> <br />
                <button className="btn btn-primary"
                       onClick={this.clickHandler}
               >Event Click - Bind inside Constructor</button> 
            </div>
        )
    }
}

export default EventBind
