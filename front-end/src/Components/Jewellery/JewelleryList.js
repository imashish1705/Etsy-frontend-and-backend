import React, { Component } from 'react';
import Jewellery from './Jewellery';
import axios from 'axios';
import Register from "../../LandingPage/Header/Register";

class JewelleryList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jewellery:[]
        }
    }

    async componentDidMount() {
        const jewellery = await axios.get('/jewellery');
        // console.log(blogs);
        this.setState({ jewellery: jewellery.data });
    }

    render() {

        let alljewellery = this.state.jewellery.map(b => {
            return <Jewellery
                key={b._id}
                img={b.img}
                price={b.price}
                desc={b.desc}
                name={b.name}
                id={b._id}
                
            />
        })
      
        return (
            <>
            <Register/>
            <h1 style={{
                marginLeft:"2%",
                padding:"2%"
            }}>Jewellery & Accessories</h1>
            <div className="container" >
                <div className="row">
                    
            <div style={{columns:"auto"}}>
            
           
           {alljewellery}
           
           </div>
           </div>
           </div>
            </>
        );
    }
}

export default JewelleryList;
