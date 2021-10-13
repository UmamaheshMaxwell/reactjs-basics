import React from 'react'

function GreetingOne({name, skill, children}) {
    return (
        <div>
            <h3>Name is {name} and skill is {skill} {children}</h3>
        </div>
    )
}

export default GreetingOne
