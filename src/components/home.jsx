import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../styles/home.scss"
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
  <div id="home" className="d-flex align-items-center masthead masked">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1>
            Hi, i'm <br />
            John Niño
          </h1>
          <p className="lead-text wow animate__bounce animate__fadeInUp">
            Front-End Developer &amp; Freelancer
          </p>
          <div className="control">
            <a
              href="#request"
              className="btn wow fadeInUp"
              data-wow-delay="0.2s"
              data-toggle="modal"
            >
              Contact me
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <Lottie options={defaultOptions} height={200} width={200} />
        </div>
      </div>
    </div>
  </div>
)

export default Home
