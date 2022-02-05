import React from "react"

//images
import githubImage from "../images/GitHub.png"
import linkeindImage from "../images/linkedin.png"

//Looties
import Lottie from "react-lottie"
import linkedinAnimation from "../lotties/linkedin.json"
import githubAnimation from "../lotties/github.json"

//DefaultConfig Looties
const optionsForGithub = {
  loop: true,
  autoplay: true,
  animationData: githubAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
}
const optionsForLinkeind = {
  loop: true,
  autoplay: true,
  animationData: linkedinAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
}

const Footer = () => (
  <footer id="footer" className="w-100">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6 d-flex justify-content-center justify-content-lg-start">
          <a href="https://github.com/HenKyubi666">
            <img
              src={githubImage}
              alt="GitHub logo"
              className="logo-contact py-1 px-1 py-md-2 px-md-2"
            />
          </a>
          <a href="https://www.linkedin.com/in/john-henrry-ni%C3%B1o-pico-108508215/">
            <img
              src={linkeindImage}
              alt="Linkeind logo"
              className="logo-contact py-1 px-1 py-md-2 px-md-2"
            />
          </a>
        </div>
        <div className="col-md-6">
          <div className="copyrights d-flex justify-content-center justify-content-lg-end fs-6">
            © {new Date().getFullYear()}. All rights reserved
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
