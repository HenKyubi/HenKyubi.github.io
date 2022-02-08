import React, { useEffect } from "react"
import { useState } from "react"

//Lotties
import Lottie from "react-lottie"
// import animationData from "../lotties/space-mail.json"
import animationData from "../lotties/space-rocket.json"

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
}

const Loader = (loading = true) => {
  // const [loading, setLoading] = useState(true)
  // console.log(loading)

  // const hideLoader = () => {
  //   setLoading(false)
  // }

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false)
  //     // document.removeChild("loader")
  //   }, 5000)
  //   console.log(loading)
  // }, [])

  // initialLoad()
  // console.log(loading)
  return (
    <div
      id="loader"
      className="d-flex justify-content-center align-items-center loader"
    >
      {/* {loading && setLoading()} */}
      <div>
        <Lottie options={defaultOptions} />
      </div>
    </div>
  )
}

export default Loader
