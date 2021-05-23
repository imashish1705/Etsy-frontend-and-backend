import React, { Component } from 'react'
import "react-bootstrap";
import {Link} from "react-router-dom";
 class Cart extends Component {
     constructor(){
         super();
         this.state={
             total:0
         }
     }
    render() {
        return (
            <div className="container" style={{
                marginTop:"8rem"
                }}>

    <div className="row">
        <div className="col-lg-8">
            <div className="row">
                 <div className="col-lg-12">
                 <div className="card mb-3" >
                     <div className="row g-0">
                       <div className="col-md-4">
                         <img src={this.props.img} alt="..." style={{maxWidth:"250px"}}/>
                       </div>
                       <div className="col-md-8">
                         <div className="card-body">
                           <h5 className="card-title">$ {this.props.price}</h5>
                           <p className="card-text">{this.props.desc}</p>
                           <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                           <form method="POST" action="/cart/{currentUser._id}/item/{item._id}?_method=DELETE">
                               <button className="btn btn-sm btn-danger">remove</button>
                           </form>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               
             </div>
        </div>
        <div className="col-lg-4">
            <div className="list-group list-group-numbered">
                {this.props.total }
                
                    <li className="list-group-item">{this.props.name} $ {this.props.price}</li>
                    {this.total = this.props.price}
                
               
            </div>

            <ul className="list-group">
                <li className="list-group-item fw-bold">Total : {this.props.price}</li>
            </ul>

            <div class="mb-3 mt-3">
                <Link to="/" className="btn btn-success">Buy Now</Link>
            </div>
            
           

        </div>
    </div>

   
   
</div>



        )
    }
}
export default Cart;