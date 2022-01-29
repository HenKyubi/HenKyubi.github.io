import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../styles/header.scss"
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

const Home = () => (
  <div id="home" className="masthead masked">
    <div className="">
      <div className="container">
        <h1>
          Hi, i'm <br />
          John Niño
        </h1>
        <p className="lead-text wow fadeInUp">
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
    </div>
  </div>
)

export default Home
