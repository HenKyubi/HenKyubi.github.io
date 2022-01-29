import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../styles/header.scss"

const Header = () => (
  <header className="header">
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"></a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                CV
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  // <header id="top" className="navbar js-navbar-affix">
  //   <div className="container">
  //     <div className="navbar-header">
  //       <button
  //         type="button"
  //         className="navbar-toggle collapsed"
  //         data-toggle="collapse"
  //         data-target="#navbar-collapse"
  //       >
  //         <span className="sr-only">Toggle navigation</span>
  //         <span className="icon-bar"></span>
  //         <span className="icon-bar"></span>
  //         <span className="icon-bar"></span>
  //       </button>
  //       {/* <a href="#layout" className="brand js-target-scroll">
  //             <img className="brand-img-white" alt="" src="img/brand-white.png" />
  //           </a> */}
  //     </div>
  //     <div className="collapse navbar-collapse" id="navbar-collapse">
  //       <ul className="nav navbar-nav navbar-right">
  //         <li className="active">
  //           <a href="#layout">Home</a>
  //         </li>
  //         <li>
  //           <a href="#about">About</a>
  //         </li>
  //         <li>
  //           <a href="#CV">CV</a>
  //         </li>
  //         <li>
  //           <a href="#portfolio">Portfolio</a>
  //         </li>
  //         <li>
  //           <a href="#reviews">Reviews</a>
  //         </li>
  //         <li>
  //           <a href="#contacts">Contacts</a>
  //         </li>
  //       </ul>
  //     </div>
  //   </div>
  // </header>
)

export default Header
