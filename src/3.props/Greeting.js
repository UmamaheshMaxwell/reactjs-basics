import React from 'react'

function Greeting(props) {
    const {name, skill, children} = props
    return (
        <div>
            <h3>Name is {name} and skill is {skill} {children}</h3>
        </div>
    )
}

export default Greeting
