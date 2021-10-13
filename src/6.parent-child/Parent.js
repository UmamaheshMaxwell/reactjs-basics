import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {
    constructor(){
        super()

        this.state ={
            parent: 'Parent'
        }

        this.callParent = this.callParent.bind(this)
    }

    callParent(child){
        alert(`Calling ${this.state.parent} from ${child}`)
    }

    render() {
        return (
            <div>
                <Child name="Uma" city={({city:'Hyd'})} method={this.callParent} />
            </div>
        )
    }
}

export default Parent
