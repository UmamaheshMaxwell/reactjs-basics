import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

 class LifeCycleA extends Component {
     constructor(){
         super()

         this.state ={}
         console.log(`This is constructor of Parent Class A`)
     }

     static getDerivedStateFromProps(props, state){
        console.log(`This is getDerivedStatefromProps method of Parent Class A`)
        return {}
     }

     componentDidMount(){
        console.log(`This is componentDidMount method of Parent Class A`)  
     }

    render() {
        console.log(`This is render method of Parent Class A`)  

        return (
            <div>
                <h1>LifeCyleA component</h1>
                <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleA
