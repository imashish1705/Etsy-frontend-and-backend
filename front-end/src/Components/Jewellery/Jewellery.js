import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "./Showitems.css"
import  "react-bootstrap";


class Jewellery extends Component {
    render() {
        
        return (    
            <>
            <div className ="container">
            <div class="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
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

            </div>
            </div>
            </div>
          </>
        )
    }
}
export default  Jewellery;