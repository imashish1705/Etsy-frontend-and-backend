// import React,{useState} from 'react'
// import {useHistory} from "react-router-dom";
// import axios from "axios";

// const Login  =()=> {
// const history = useHistory();
// const [values, setValues] = useState({
//   email:"",
//   password:""
// });

// const handleChange = name => e => {
//   setValues({ ...values, [name]: e.target.value });
// };

// const submitHandler = async(e) => {
//   e.preventDefault();
//   const {email,password } = values;
//   const user = {email, password};
//   await axios.post('http://localhost:4000/login',user).then(response => { 
//     console.log(response);
//   })
//   .catch(error => {
//       console.log(error)
//   });
//   if(!user) {
//     window.alert("invalid credentials");
//   } else {
//     history.push("/");
//   }
  
// }

//   return (
//     <div>
//       <form onSubmit = {submitHandler}>
//       <input type = "email"
//              required
//               placeholder = "Email"
//               onChange={handleChange('email')}
//               value = {values.email}
//               className = "form-control from-group"
//               />
//                 <input type = "password"
//               required
//               placeholder = "password"
//               onChange={handleChange("password")}
//               value = {values.password}
//               className = "form-control from-group"
//               />
//               <button>login</button>
//       </form>
      
//     </div>
//   )
// }
// export default Login;





import React, { Component} from 'react';
import {withRouter} from "react-router";
import "react-bootstrap";
import axios from "axios";
 class Login extends Component {
   constructor() {
     super();
     this.state = {
       email:"",
       password:""
       
     }

     this.changeHandler = this.changeHandler.bind(this);
     this.submitHandler = this.submitHandler.bind(this);
     
   }

     
   changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
}
   
  submitHandler = async(e) => {
    e.preventDefault();
    await axios.post('http://localhost:4000/login', this.state).then(res=>{
      console.log(res);
    }).then( res =>{
      console.log(res);
  })
  .catch(err=>{
    console.log(err);
  })
    // Redirect to /JewelleryPage page
    this.props.history.push('/');
}

  render() {
    
    return (
      <div>
       
        <div className = "container">
          <div className = "form-dev">
            <form onSubmit ={this.submitHandler}>
             
              <input type = "email"
              required
              placeholder = "email"
              onChange = {this.changeHandler}
              name = "email"
              className = "form-control from-group"
              />

              <input type = "password"
              placeholder = "password"
              required
              onChange = {this.changeHandler}
              name = "password"
              className = "form-control from-group"
              />


             {/* <input type = "submit" className ="btn btn-danger btn-block " value="submit" /> */}
             <button>login</button>
                
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(Login);