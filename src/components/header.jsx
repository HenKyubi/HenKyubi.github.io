import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
//Style
// import "../styles/header.scss"
import Lottie from "react-lottie"
import animationData from "../lotties/space-mail.json"

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
}

const Header = () => (
  <header className="header w-100">
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
          <div>
            <Lottie options={defaultOptions} height={70} width={70} />
          </div>
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
                Portfolio
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
)

export default Header
