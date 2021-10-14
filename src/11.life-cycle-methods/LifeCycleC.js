import React, { Component } from 'react'

 class LifeCycleC extends Component {
     constructor(){
         super()

         this.state ={}
         console.log(`This is constructor of Parent Class C`)
     }

     static getDerivedStateFromProps(props, state){
        console.log(`This is getDerivedStatefromProps method of Parent Class C`)
        return {}
     }

     componentDidMount(){
        console.log(`This is componentDidMount method of Parent Class C`)  
     }

    render() {
        console.log(`This is render method of Parent Class C`)  

        return (
            <div>
                <h1>LifeCyleC component</h1>
            </div>
        )
    }
}

export default LifeCycleC
