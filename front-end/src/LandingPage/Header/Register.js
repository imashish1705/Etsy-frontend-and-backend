import React, { Component } from 'react';
import {withRouter} from "react-router";
import "react-bootstrap";
import axios from "axios";
 class Register extends Component {
   constructor() {
     super();
     this.state = {
       username:"",
       email:"",
       password:"",
       
     }

     this.changeHandler = this.changeHandler.bind(this);
     this.submitHandler = this.submitHandler.bind(this);
     
   }

     
   changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
}
   
  submitHandler = async(e) => {
    e.preventDefault();
    await axios.post('http://localhost:4000/register', this.state);
    // Redirect to /JewelleryPage page
    this.props.history.push('/facemask');
    
    this.setState({
      name:"",
      email:"",
      password:""
    });
}

  render() {
    
    return (
      <div>
       
        <div className = "container">
          <div className = "form-dev">
            <form onSubmit ={this.submitHandler}>
              <input type = "text"
              placeholder = "username"
              onChange={this.changeHandler}
              name = "username"
              className = "form-control from-group"
              />

              <input type = "email"
              placeholder = "email"
              onChange = {this.changeHandler}
              name = "email"
              className = "form-control from-group"
              />

              <input type = "password"
              placeholder = "password"
              onChange = {this.changeHandler}
              name = "password"
              className = "form-control from-group"
              />


             {/* <input type = "submit" className ="btn btn-danger btn-block " value="submit" /> */}
             <button>Register</button>
                
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(Register);