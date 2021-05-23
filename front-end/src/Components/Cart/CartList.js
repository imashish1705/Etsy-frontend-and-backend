import React, { Component } from 'react';
import Cart from './Cart';
import axios from 'axios';
//import Register from "../../LandingPage/Header/Register";

class CartList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cart:[]
        }
    }

    async componentDidMount() {
        const cart = await axios.get('/user/cart');
        // console.log(blogs);
        this.setState({ cart:cart.data });
    }

    render() {

        let allcart = this.state.cart.map(c => {
            return <Cart
                key={c._id}
                img={c.img}
                price={c.price}
                desc={c.desc}
                name={c.name}
                id={c._id}
                
            />
        })
      
        return (
            <>
            
         <div>
            
           
           {allcart}
           
         
           </div>
            </>
        );
    }
}

export default CartList;
