import React, { Component } from 'react'
import LifeCycleC from './LifeCycleC'

 class LifeCycleB extends Component {
     constructor(){
         super()

         this.state ={}
         console.log(`This is constructor of Parent Class B`)
     }

     static getDerivedStateFromProps(props, state){
        console.log(`This is getDerivedStatefromProps method of Parent Class B`)
        return {}
     }

     componentDidMount(){
        console.log(`This is componentDidMount method of Parent Class B`)  
     }

    render() {
        console.log(`This is render method of Parent Class B`)  

        return (
            <div>
                <h1>LifeCyleB component</h1>
                <LifeCycleC />
            </div>
        )
    }
}

export default LifeCycleB
