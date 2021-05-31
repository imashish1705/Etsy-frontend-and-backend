import React,{useState,useEffect} from 'react'
//import Layout from "../../components/Layout";
//import Input from "../../components/UI/Input";
import {Container , Form , Row , Col , Button} from "react-bootstrap";
import { isUserLoggedIn, login } from "../../actions/";
import {useDispatch,useSelector} from "react-redux";
import { Redirect } from 'react-router-dom';
const Signin = ()=> {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
     const [error, setError] = useState('');
   const auth = useSelector(state => state.auth)
     const dispatch = useDispatch();

 
//      useEffect(()=>{
//       if(!auth.authenticate) {
//           dispatch(isUserLoggedIn());
//       }
      
//   },[]);

   
 

    const userLogin = (e) =>{
        
        e.preventDefault();
        const user ={
           email,password

        }
        dispatch(login(user));
    }
//     if(auth.authenticate) {
//       return <Redirect to = {"/"}/>
//   }
  
    return (
        <>
         <div>
                        <Form onSubmit={userLogin}>
                            <input 
                                label="Email"
                                placeholder="Email"
                                value={email}
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <input 
                                label="Password"
                                placeholder="Password"
                                value={password}
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                   </div>
                
         
        </>
    )
}

export default Signin;








// import React,{useState} from 'react'
// import {useHistory} from "react-router-dom";
// import axios from "axios";

// const Login  =()=> {
// const history = useHistory();
// const [loginEmail , setEmail] = useState("");
// const [loginPassword , setPassword] = useState("");

// const submitHandler = (e)=>{
//   axios({
//     method: "POST" , 
//     data : {
//       email: loginEmail,
//       password:loginPassword,
//     },
//     url:"http://localhost:4000/login",
//   }).then((res)=>console.log(res));
//   history.push("/");
// }
//     return (
//     <div>
//       <form onSubmit = {submitHandler}>
//       <input type = "email"
//              required
//               placeholder = "Email"
//               onChange={(e)=>setEmail(e.target.value)}
              
//               className = "form-control from-group"
//               />
//                 <input type = "password"
//               required
//               placeholder = "password"
//               onChange={(e)=>setPassword(e.target.value)}
             
//               className = "form-control from-group"
//               />
//               <button>login</button>
//       </form>
      
//     </div>
//   )
// }
// export default Login;





// import React, { Component} from 'react';
// import {withRouter} from "react-router";
// import "react-bootstrap";
// import axios from "axios";
//  class Login extends Component {
//    constructor() {
//      super();
//      this.state = {
//        email:"",
//        password:""
       
//      }

//      this.changeHandler = this.changeHandler.bind(this);
//      this.submitHandler = this.submitHandler.bind(this);
     
//    }

     
//    changeHandler = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
// }
   
//   submitHandler = async(e) => {
//     e.preventDefault();
//     await axios.post('http://localhost:4000/login', this.state).then(res=>{
//       console.log(res);
//     }).then( res =>{
//       console.log(res);
//   })
//   .catch(err=>{
//     console.log(err);
//   })
//     // Redirect to /JewelleryPage page
//     this.props.history.push('/');
// }

//   render() {
    
//     return (
//       <div>
       
//         <div className = "container">
//           <div className = "form-dev">
//             <form onSubmit ={this.submitHandler}>
             
//               <input type = "email"
//               required
//               placeholder = "email"
//               onChange = {this.changeHandler}
//               name = "email"
//               className = "form-control from-group"
//               />

//               <input type = "password"
//               placeholder = "password"
//               required
//               onChange = {this.changeHandler}
//               name = "password"
//               className = "form-control from-group"
//               />


//              {/* <input type = "submit" className ="btn btn-danger btn-block " value="submit" /> */}
//              <button>login</button>
                
//             </form>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }
// export default withRouter(Login);