import React, { Component } from 'react';
import {Link} from "react-router-dom";
class FaceMask extends Component {
    render() {
        return (
            <>
      <div className="ef__container">
            <div className="ef__block">
              <img src={this.props.img} className="ef-img "  alt="" />
              <div className="ef-title">
                <Link to={`/facemask/${this.props.id}`}>
                  <div className="ef-title">{this.props.desc}</div>
                </Link>
              </div>
            </div>
        
      </div>
      
    </>
        )
    }
}
export default  FaceMask;