import * as React from "react"

//Lotties
import Lottie from "react-lottie"
// import animationData from "../lotties/space-mail.json"
import animationData from "../lotties/menu.json"

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
        {/* <div>
          <Lottie options={defaultOptions} height={50} width={50} />
        </div> */}
        <button
          className="navbar-toggler toggler-menu"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div>
            <Lottie options={defaultOptions} height={40} width={40} />
          </div>
        </button>

        <div
          className="collapse navbar-collapse container justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="header-link active"
                aria-current="page"
                href="#home"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="header-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="header-link" href="#CV">
                CV
              </a>
            </li>
            <li className="nav-item">
              <a className="header-link" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="header-link" href="#contacts">
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
