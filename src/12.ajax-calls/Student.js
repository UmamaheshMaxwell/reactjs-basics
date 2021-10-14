import React, { Component } from 'react'

export class Student extends Component {

    constructor(){
        super()

        this.state = {
            students : [],
            id: '',
            name: '',
            email: '',
            city: ''
        }
    }

    componentDidMount(){
        this.getStudents()
    }

    getStudents(){
        fetch(`http://localhost:5001/api/student`)
        .then(response => response.json())
        .then((data) => this.setState({students: data}))
    }

    clearFields(){
        this.setState({
            name: '',
            email: '',
            city: ''
        })
    }

    addStudent(){
        const postRquest = {
              headers: {'Content-Type': 'application/json'},
              method: "POST",
              body: JSON.stringify({
                  name: this.state.name,
                  email: this.state.email,
                  city: this.state.city
              })
        }
        fetch(`http://localhost:5001/api/student`, postRquest)
        .then(response => response.json())
        .then((data) =>  {
            this.clearFields()
            this.getStudents()
        })
    }

    updateStudent(){
        const putRquest = {
              headers: {'Content-Type': 'application/json'},
              method: "PUT",
              body: JSON.stringify({
                  name: this.state.name,
                  email: this.state.email,
                  city: this.state.city
              })
        }
        fetch(`http://localhost:5001/api/student/${this.state.id}`, putRquest)
        .then(response => response.json())
        .then((data) =>  {
            this.clearFields()
            this.getStudents()
        })
    }

    deleteStudent(id){
        const deleteRquest = {
              headers: {'Content-Type': 'application/json'},
              method: "DELETE"
        }
        fetch(`http://localhost:5001/api/student/${id}`, deleteRquest)
        .then(response => response.json())
        .then((data) =>  {
            this.clearFields()
            this.getStudents()
        })
    }

    editFields(id){
        fetch(`http://localhost:5001/api/student/${id}`)
        .then(response => response.json())
        .then((data) => { 
            const student = data
            console.log(data)
            this.setState({
                id: student[0].id,
                name: student[0].name,
                email: student[0].email,
                city: student[0].city
            })
        })
    }
    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>Actions</th>
                            <th>

                            </th>
                        </tr>
                        <tr>
                           <th>
                                <input type="text" 
                                       value={this.state.name}
                                       onChange={(event)=>this.setState({name: event.target.value})}  
                                />
                           </th>                          
                            <th>
                                <input type="text" 
                                       value={this.state.email}
                                       onChange={(event)=>this.setState({email: event.target.value})}
                                 />
                           </th>
                           <th>
                           <input type="text" 
                                       value={this.state.city}
                                       onChange={(event)=>this.setState({city: event.target.value})}
                                 />
                           </th>
                           <th>
                               <button className="btn btn-primary"
                                       onClick={() => this.addStudent()}
                               >Add</button>
                           </th>
                           <th>
                                <button className="btn btn-warning"
                                    onClick={() => this.updateStudent()}
                                >Update</button>
                           </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.students.map(student => (
                                <tr key={student.id}>
                                    <td>{student.name}</td>
                                    <td>{student.email}</td>
                                    <td>{student.city}</td>
                                    <td>
                                        <button className="btn btn-warning"
                                                onClick={() => this.editFields(student.id)}
                                        >Edit</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger"
                                                onClick={() =>this.deleteStudent(student.id)}
                                        >Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>
            </div>
        )
    }
}

export default Student
