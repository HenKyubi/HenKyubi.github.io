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

const Home = () => <div></div>

export default Home
