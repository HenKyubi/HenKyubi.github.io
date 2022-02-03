import React from "react"

//Picture of me
import Me from "../images/me.jpg"

//Lotties
import Lottie from "react-lottie"
import animationData from "../lotties/html.json"

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
}

const About = () => (
  <section id="about" className="container d-flex">
    <div className="row align-items-center">
      <div className="col-12 col-md-6 d-flex justify-content-center">
        <img className="img-fluid" alt="Picture of John Niño" src={Me} />
      </div>
      <div className="col-12 col-md-6">
        <h2 className="text-center text-md-start fs-1 fw-bold">About me</h2>
        <p className="pagraph-about fs-6 lh-sm">
          Systems enginner - junior full-stack developer, skills in React,
          Angular, HTML, CSS, JavaScript, NodeJS, Responsive Design. Knowledge
          of database engines (MySQL, MongoDB), handling of GIT version control.
        </p>
        <div className="skills-bar row">
          <div className="col-md-6">
            <Lottie options={defaultOptions} height={200} width={200} />
          </div>
          <div className="col-md-6 d-flex-column align-items-center">
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          {/* <div className="progress-bar-title">HTML</div>
          <div className="progress">
            <div className="progress-bar" data-width="85">
              <span>85%</span>
            </div>
          </div>
          <div className="progress-bar-title">CSS</div>
          <div className="progress">
            <div className="progress-bar" data-width="80">
              <span>80%</span>
            </div>
          </div>
          <div className="progress-bar-title">JavaScript</div>
          <div className="progress">
            <div className="progress-bar" data-width="75">
              <span>75%</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  </section>
)

export default About
