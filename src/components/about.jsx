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
  <section id="about" className="container d-flex">
    <div className="row align-items-center">
      <div className="col-12 col-md-6 d-flex justify-content-center">
        <img className="img-fluid img-me" alt="Picture of John Niño" src={Me} />
      </div>
      <div className="col-12 col-md-6 text-about">
        <div className="d-flex justify-content-center container-animation-moon">
          <div className="animation-moon">
            <div>
              <Lottie options={defaultOptionsMoon} height={250} width={250} />
            </div>
          </div>
        </div>
        <h2 className="text-center text-md-start fs-1 fw-bold">About me</h2>
        <p className="pagraph-about fs-6 lh-sm">
          Systems enginner - junior full-stack developer, skills in React,
          Angular, HTML, CSS, JavaScript, NodeJS, Responsive Design. Knowledge
          of database engines (MySQL, MongoDB), handling of GIT version control.
        </p>
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
