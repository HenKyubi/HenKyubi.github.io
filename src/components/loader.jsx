import React from "react"

//Lotties
import Lottie from "react-lottie"
import animationData from "../lotties/rocket-funk.json"

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
}

const Loader = () => {
  return (
    <>
      <div
        id="loader"
        className="d-flex align-items-center justify-content-center"
      >
        <div>
          <Lottie options={defaultOptions} />
        </div>
      </div>
    </>
  )
}

export default Loader
