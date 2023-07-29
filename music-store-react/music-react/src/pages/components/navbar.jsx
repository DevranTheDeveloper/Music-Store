import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function Navbar() {

  const [name, setName] = useState(<i className="fas fa-solid fa-user fa-xl" style={{color: "#ffffff"}}></i>)

  useEffect(() => {
    const userJSON = localStorage.getItem("user")
    if (userJSON) {
      const user = JSON.parse(userJSON)
      setName(user[0].ns)
    } 
  })
    return (
        <nav className="navbar navbar-dark  fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">MUSIC STORE</a>
          <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to={"/"+"Instruments"}>Instruments</Link></li>
            <li><Link to={"/"+"Contact"}>Contact Us</Link></li>
            <li><Link to={"/"+"About"}>About Us</Link></li>
            <li><Link to={"/"+"Cart"}><i className="fa-solid fa-cart-shopping fa-xl" style={{color: "#ffffff"}}></i></Link></li>
          </ul>
          <ul className="navbar-links">
            <li><Link to={"/"+"Signin"}><i className="fas fa-solid fa-right-to-bracket fa-xl" style={{color: "#ffffff"}}></i></Link></li>
            <li><Link to={"/"+"User"} className="login-item">{name}</Link></li>
          </ul>
          <button className="navbar-toggler" type="button" datatype-bs-toggle="offcanvas" datatype-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">=</span>
          </button>
          <div className="offcanvas offcanvas-end " tabIndex="-1" id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">MUSIC STORE</h5>
              <button type="button" className="btn-close btn-close-dark" datatype-bs-dismiss="offcanvas"
                aria-label="Close">x</button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/index.html">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="instruments.html">Instruments</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="sign-in.html">Sign-In</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">Contact Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">About Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
}

export default Navbar