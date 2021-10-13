import React from 'react'

function Child(props) {
   const {name, city, method} =props
    return (
        <div>
            <h3>Name: {name}</h3>
            <h3>City: {(city.city)}</h3>
            <button className="btn btn-primary"
                    onClick={() => method('child')}
            >Call Parent Method</button>
        </div>
    )
}

export default Child
