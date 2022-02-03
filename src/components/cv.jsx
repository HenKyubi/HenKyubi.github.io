import React from "react"
import cv from "../assets/CV.pdf"

//Lotties
import Lottie from "react-lottie"
import animationData from "../lotties/pdf-file.json"

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
}

const CV = () => (
  <section
    id="CV"
    className="container d-flex flex-column justify-content-center"
  >
    <h2 className="text-center fs-1 fw-bold pb-3">View my resume</h2>
    <p className="text-center fs-6 lh-1 pb-3">
      Download my CV and see in detail the projects in which I have
      participated.
    </p>
    <div className="d-flex justify-content-center">
      <a href={cv} download="CV John Henry Niño Pico.pdf">
        <Lottie options={defaultOptions} height={300} width={300} />
      </a>
    </div>
  </section>
)

export default CV
