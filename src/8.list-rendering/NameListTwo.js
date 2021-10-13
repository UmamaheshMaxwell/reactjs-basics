import React from 'react'

function NameListTwo() {
    const names =["Uma", "Swathi", "Jagrav" ,"Manasvi"]
    const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>)
    return (
        <React.Fragment>
            <h2>This is a list</h2>
            <h2>This is another H2</h2>
            {nameList}
        </React.Fragment>      
    )
}

export default NameListTwo
