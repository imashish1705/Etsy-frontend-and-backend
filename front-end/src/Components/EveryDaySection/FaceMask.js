import React, { Component } from 'react';
import {Link} from "react-router-dom";
class FaceMask extends Component {
    render() {
        return (
            <>
      <div >
            <div style={{
              width:"20%",
              height:"20%"
            }}>
              <img src={this.props.img}   alt="" />
              <div >
                <Link to={`/facemask/${this.props.id}`}>
                  <div >{this.props.desc}</div>
                </Link>
              </div>
            </div>
        
      </div>
      
    </>
        )
    }
}
export default  FaceMask;