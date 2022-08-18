import React from "react"

//Lotties
import Lottie from "react-lottie"
import animationData from "../lotties/react-logo.json"

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
}

const Home = () => (
  <div
    id="home"
    className="d-flex align-items-center justify-content-center h-100"
  >
    <div className="background-home d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="d-flex justify-content-center">
          <div className="row col-lg-6 ">
            <div className="col-md-6 title-page ps-md-5 pe-md-0 ps-lg-3">
              <h1 className="text-center text-md-start fw-bold fs-1 lh-sm">
                Hi, i'm <br />
                John Niño
              </h1>
              <p className="text-center text-md-start fs-6 lh-1 pagraph-title">
                Full Stack Developer &amp; Freelancer
              </p>
              <div className="d-flex justify-content-center justify-content-md-start">
                <a
                  href="https://wa.me/573163350025"
                  className="btn-home-contact-me fs-5 fw-bold px-2"
                >
                  Contact me
                </a>
              </div>
            </div>
            <div className="col-md-6 ps-md-5 d-flex justify-content-center justify-content-lg-end principal-animation">
              <div>
                <Lottie options={defaultOptions} height={180} width={180} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Home
