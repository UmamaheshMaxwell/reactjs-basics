import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler(){
        console.log('click the button - Class')
    }
    render() {
        return (
            <div>
               <button className="btn btn-primary" 
                       onClick={this.clickHandler}
               >Click Me</button> 
            </div>
        )
    }
}

export default ClassClick
