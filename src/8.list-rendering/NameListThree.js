import React from 'react'
import Person from './Person'

function NameListThree() {
    const persons = [
        {
            id: 1,
            name:"Scott",
            age: 45,
            skill: 'C#'
        },
        {
            id: 2,
            name:"Adam",
            age: 43,
            skill: 'Python'
        },
        {
            id: 3,
            name:"Tuan",
            age: 42,
            skill: 'AI'
        },        {
            id: 4,
            name:"Uma",
            age: 39,
            skill: 'Javascript'
        }

    ]

    const personList = persons.map(person => <Person key={person.id} person={person} />)
    return <React.Fragment>{personList}</React.Fragment>
}

export default NameListThree
