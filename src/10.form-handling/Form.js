import React, { Component } from 'react'

class Form extends Component {
    constructor(){
        super()

        this.state = {
            username: '',
            comments: '',
            country: '',
            gender: '',
            isAdmin: false
        }

    }

    updateUsername(username){
        this.setState({username : username})   
    }

    updateComments(comments){
        this.setState({comments: comments})   
    }

    updateCountry(country){
        this.setState({country: country})
    }

    updateGender(gender){
        this.setState({gender: gender})
    }

    updateIsAdmin(){
        this.setState({
            isAdmin: !this.state.isAdmin
        })
    }

    getFormData(){
        console.log(this.state.username)
        console.log(this.state.comments)
        console.log(this.state.country)
        console.log(this.state.gender)
        console.log(this.state.isAdmin)
    }

    render() {
        return (
            <div className="container">
                <h1>Form Component</h1>
                <form action="">
                    <div className="form-group">
                        <label htmlFor="">UserName</label>
                        <input type="text" 
                               className="form-control w-50"
                               value={this.state.username}
                               onChange={event =>this.updateUsername(event.target.value)}
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="">Comments</label>
                        <textarea  className="form-control w-50"
                                   value={this.state.comments}
                                   onChange={event => this.updateComments(event.target.value)}
                        ></textarea>
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="">Country</label>
                        <select className="form-select w-50"
                                value ={this.state.country}
                                onChange={event => this.updateCountry(event.target.value)}
                        >
                            <option value="">Select</option>
                            <option value="1">Bharat</option>
                            <option value="2">Japan</option>
                            <option value="3">Australia</option>
                        </select>
                    </div>   
                    <br />
                    <div className="form-group">
                        <label htmlFor="">Gender</label> &nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" 
                               className="form-check-input" 
                               value={1} 
                               name="gender" 
                               onChange={event => this.updateGender(event.target.value)}
                        /> Female &nbsp;&nbsp;
                        <input type="radio" 
                               className="form-check-input" 
                               value={0} 
                               name="gender" 
                               onChange={event => this.updateGender(event.target.value)}
                        /> Male &nbsp;&nbsp;
                    </div>  
                    <br />
                    <div className="form-group">
                        <label htmlFor="">Is Admin</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="checkbox"  
                               className="form-check-input"
                               value={this.state.isAdmin}
                               onChange={event => this.updateIsAdmin(event.target.value)}
                        />
                    </div>                                                     
                    <br />
                    <button type="button" 
                            className="btn btn-primary"
                            onClick={this.getFormData.bind(this)}
                    >Submit</button>
                </form>
            </div>
        )
    }
}

export default Form
