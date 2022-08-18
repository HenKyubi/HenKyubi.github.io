import React from "react"

//Picture of me
import Me from "../images/me.jpg"

//Lotties
import Lottie from "react-lottie"
import animationData from "../lotties/html.json"
import animationMoon from "../lotties/moon.json"

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
}
const defaultOptionsMoon = {
  loop: true,
  autoplay: true,
  animationData: animationMoon,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
}

const About = () => (
  <section id="about" className="container d-flex align-items-center">
    <div className="row align-items-center">
      <div className="col-12 col-md-6 d-flex justify-content-center pb-1 pb-md-0">
        <img className="img-fluid img-me" src={Me} alt="John Niño" />
      </div>
      <div className="col-12 col-md-6 d-flex flex-column">
        <div className="d-flex">
          <div className="d-flex justify-content-center animation-moon">
            <div>
              <Lottie options={defaultOptionsMoon} height={250} width={250} />
            </div>
          </div>
          <div className="text-about">
            <h2 className="text-center text-md-start fs-1 fw-bold">About me</h2>
            <p className="pagraph-about fs-6 lh-sm">
              Systems engineer, +1 year experlence In web / mobile development,
              MERN stack, and Flutter, applying good practices, documentatlon,
              Clean Code, BEM, SOLID principies, knowledge in consumption and
              development of RESTFul APls, Used to working with control systems
              of versions like Git.
            </p>
          </div>
        </div>
        <div className="skills-bar justify-content-center row">
          <div>
            <Lottie options={defaultOptions} height={200} width={200} />
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default About
