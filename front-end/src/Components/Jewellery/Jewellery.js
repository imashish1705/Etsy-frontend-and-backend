import React, { Component } from 'react';
import {Link} from "react-router-dom";
//import {Card,CardColumns} from "react-bootstrap";

class Jewellery extends Component {
    render() {
        
        return (    
            <>
            <div className="Shopourselections__container">
            <div className="productsselection__container">
              <ul className="ul_shop_container">
                  <li className="li_shop_container">
                    <div className="product_shop_container">
                    <Link to={`/jewellery/${this.props.id}`}>
                      <img
                        src={this.props.img}
                        className="shop_photo"
                        alt=""
                    />
                      <p className="shop_title">{this.props.desc}</p>
                      
                     
                      </Link>
                    </div>
                  </li>
                
              </ul>
            </div>

            </div>

              

          </>
        )
    }
}
export default  Jewellery;