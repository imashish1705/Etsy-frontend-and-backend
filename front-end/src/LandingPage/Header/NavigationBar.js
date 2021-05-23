
import { useState } from "react";
import "./NavigationBar.css";
import SearchBar from "./SearchBar";
//import Login from "./Login";
import { Link } from 'react-router-dom';
import NavLink from "./NavLink";
import {Modal} from "react-bootstrap";
import Login from "./Login";
import Register from "./Register"
//import OutsideClickHandler from "react-outside-click-handler";
function Navbar() {


  const [show, setShow] = useState(false);
  const [show2, setModel2] = useState(false);

  const handelCloseModel2 = ()=> setModel2(false);
  const handelShowModel2 = ()=> setModel2(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  //const [hidden, setHidden] = useState(false);

  return (
    <>
      <nav className="header">
        <div className="navbar__container">
          <div className="hidden">
            <nav role="navigation">
              <div id="menuToggle">
                <input type="checkbox" />

                <span></span>
                <span></span>
                <span></span>

                <ul id="menu">
                  <Link href="/sections/sections/Jewelry-and-Accessories">
                    <li>Jewelrey and Accessories</li>
                  </Link>
                  <Link href="/sections/Clothing-and-Shoes">
                    <li>Clothing & Shoes</li>
                  </Link>
                  <Link href="/sections/Home-and-Living">
                    <li>Home & Living</li>
                  </Link>
                  <Link href="/sections/Wedding-and-Party">
                    <li>Wedding & Party</li>
                  </Link>
                  <Link href="/sections/Toys-and-Entertainment">
                    <li>Toys & Entertainment</li>
                  </Link>
                  <Link href="/sections/Art-and-Collectibles">
                    <li>Art & Collectibles</li>
                  </Link>
                  <Link href="/sections/Craft-Supplies-and-Tools">
                    <li>Craft Supplies & Tools</li>
                  </Link>
                  <Link href="/sections/Vintage">
                    <li>Vintage</li>
                  </Link>
                </ul>
              </div>
            </nav>
          </div>
          <div className="logo_container">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 24"
                aria-hidden="true"
                focusable="false"
                height="40px"
                fill="#F1641E"
              >
                <path
                  d="M6.547,3.125v6.008c0,0,2.117,0,3.25-0.086c0.891-0.156,1.055-0.242,1.219-1.133l0.328-1.305h0.969l-0.164,2.852 l0.086,2.922h-0.977l-0.242-1.141c-0.242-0.812-0.57-0.977-1.219-1.055c-0.812-0.086-3.25-0.086-3.25-0.086v5.039 c0,0.969,0.492,1.383,1.625,1.383h3.414c1.055,0,2.109-0.086,2.766-1.625l0.883-1.953h0.82c-0.086,0.406-0.492,3.984-0.57,4.789 c0,0-3.086-0.078-4.383-0.078H5.25l-3.492,0.078v-0.883l1.133-0.25c0.82-0.164,1.062-0.406,1.062-1.055 c0,0,0.086-2.195,0.086-5.852c0-3.648-0.086-5.844-0.086-5.844c0-0.727-0.242-0.891-1.062-1.055L1.758,2.555V1.664l3.414,0.07h6.5 c1.297,0,3.484-0.234,3.484-0.234s-0.078,1.375-0.164,4.625h-0.891l-0.328-1.141c-0.32-1.461-0.805-2.188-1.703-2.188H6.961 C6.547,2.797,6.547,2.875,6.547,3.125z M19.703,3.766h0.977V7.18l3.336-0.164l-0.164,1.547l-3.25-0.25v6.016 c0,1.703,0.57,2.359,1.547,2.359c0.883,0,1.539-0.492,1.781-0.898l0.484,0.57c-0.484,1.133-1.859,1.703-3.164,1.703 c-1.617,0-2.93-0.969-2.93-2.836V8.398h-1.938V7.586C18.008,7.422,19.219,6.445,19.703,3.766z M26.695,14.242l0.648,1.547 c0.242,0.648,0.812,1.305,2.109,1.305c1.383,0,1.953-0.734,1.953-1.625c0-2.766-5.445-1.953-5.445-5.688c0-2.109,1.703-3.094,3.898-3.094c0.977,0,2.438,0.164,3.172,0.492c-0.164,0.812-0.25,1.867-0.25,2.68l-0.805,0.078l-0.57-1.625 c-0.164-0.398-0.82-0.727-1.625-0.727c-0.977,0-1.953,0.406-1.953,1.461c0,2.516,5.609,1.953,5.609,5.688c0,2.117-1.867,3.25-4.148,3.25c-1.703,0-3.414-0.656-3.414-0.656c0.164-0.969,0.086-2.023,0-3.086H26.695z M33.031,22.039 c0.242-0.891,0.406-2.023,0.57-3.086l0.891-0.078l0.328,1.703c0.078,0.406,0.32,0.734,0.969,0.734c1.055,0,2.438-0.648,3.742-2.922 c-0.578-1.383-2.281-5.844-3.828-9.258c-0.406-0.898-0.484-0.977-1.047-1.141l-0.414-0.156v-0.82l2.445,0.086l3-0.164V7.75 l-0.734,0.164c-0.57,0.078-0.805,0.398-0.805,0.727c0,0.086,0,0.164,0.078,0.328c0.156,0.492,1.461,4.141,2.438,6.578c0.805-1.703,2.352-5.523,2.594-6.172c0.086-0.328,0.164-0.406,0.164-0.648c0-0.414-0.242-0.656-0.805-0.812L42.039,7.75V6.938 l2.281,0.078l2.109-0.078V7.75l-0.406,0.32c-0.812,0.328-0.898,0.406-1.219,1.062l-3.57,8.359 c-2.117,4.797-4.312,5.203-5.852,5.203C34.406,22.695,33.672,22.445,33.031,22.039z"
                  className="logo_nav"
                ></path>
              </svg>
            </Link>
          </div>
          <SearchBar className="searchinput" />
          <span className="login--btn"onClick={handleShow}
         
          >
           Sign in
      </span>
      

          <Modal
        show={show} 
        onHide={handleClose}
      >
        
        <Modal.Header closeButton>
          <Modal.Title>
            <div style={{
              display:"flex",
              
            }}>
            <span>Sign in </span>

            <div> 
              
              <span onClick={handelShowModel2} className="button button-1" style={{
                position:"relative",
                left:"240px"
              }}>register</span>
              </div>
              <Modal
                show={show2}
                onHide={handelCloseModel2}
                >
                  <Modal.Header closeButton>
                  <Modal.Title>Register Page
                <Modal.Body>
          
                <Register/>
    
              </Modal.Body> 
              </Modal.Title>
              </Modal.Header>
              </Modal>
              </div>
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <Login/>

        </Modal.Body>
        
      </Modal>




          <div className="cart_container">
            <Link to="/user/cart">
              <svg
                enable-background="new 0 0 511.343 511.343"
                viewBox="0 0 511.343 511.343"
                className="cart-btn"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m490.334 106.668h-399.808l-5.943-66.207c-.972-10.827-10.046-19.123-20.916-19.123h-42.667c-11.598 0-21 9.402-21 21s9.402 21 21 21h23.468c12.825 142.882-20.321-226.415 24.153 269.089 1.714 19.394 12.193 40.439 30.245 54.739-32.547 41.564-2.809 102.839 50.134 102.839 43.942 0 74.935-43.826 59.866-85.334h114.936c-15.05 41.455 15.876 85.334 59.866 85.334 35.106 0 63.667-28.561 63.667-63.667s-28.561-63.667-63.667-63.667h-234.526c-15.952 0-29.853-9.624-35.853-23.646l335.608-19.724c9.162-.538 16.914-6.966 19.141-15.87l42.67-170.67c3.308-13.234-6.71-26.093-20.374-26.093zm-341.334 341.337c-11.946 0-21.666-9.72-21.666-21.667s9.72-21.667 21.666-21.667c11.947 0 21.667 9.72 21.667 21.667s-9.72 21.667-21.667 21.667zm234.667 0c-11.947 0-21.667-9.72-21.667-21.667s9.72-21.667 21.667-21.667 21.667 9.72 21.667 21.667-9.72 21.667-21.667 21.667zm47.366-169.726-323.397 19.005-13.34-148.617h369.142z" />
              </svg>
            </Link>
          </div>
        </div>
        <NavLink />
      </nav>
    </>
  );
}

export default Navbar;
