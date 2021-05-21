import React, { Component } from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom';
import "./Showitems.css";
//import { Button } from 'react-bootstrap';
class Showitems extends Component {

    constructor(props) {
        super(props);
        this.state = {
            img: '',
            price: '',
            desc:'',
            name:""
        }
    }

    async componentDidMount() {
        const items = await axios.get(`/jewellery/${this.props.match.params.id}`);
        this.setState({
            img: items.data.img,
            price: items.data.price,
            desc: items.data.desc,
            name:items.data.name
        })
    }

    render() {
        return (
            <div>
                <div style={{display:"flex", padding:"1%",justifyContent:"space-evenly"}} >
                    <div className="right-side-img1">
                        <figure>
                     <img src={this.state.img}  alt=""/>
                     </figure>
                     <figure>
                     <img  src={this.state.img}  alt=""/>
                     </figure>
                    </div>
                    <div className="left-side">
                <img src={this.state.img} alt="{this.state.desc}"/>
                
                </div>
                <div className ="right-side" style={{position:"relative",left:"4%",width:"40%"}}>
                    <div>
                    <span>{this.state.desc}</span>
                <div>{this.state.name}</div>
                <div>US$ {this.state.price}</div>
                <div className="button1">
               <span className="add_button">Add to cart</span>
              </div>
             </div>
                </div>
                </div>
            </div>
            
        );
    }
}

export default Showitems;
