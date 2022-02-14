import * as React from "react"

//Styles
import "../styles/index.scss"

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

//Animate
import "animate.css"

//Swiper
import { SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"

//Wow
import WOW from "wowjs"

//components
import Seo from "../components/seo.jsx"
import Layout from "../components/layout.jsx"
import Home from "../components/home.jsx"
import About from "../components/about.jsx"
import Portfolio from "../components/portfolio.jsx"
import Contacts from "../components/contacts.jsx"
import Loader from "../components/loader.jsx"
import CvComponent from "../components/cvComponent"

if (window !== undefined) {
  window.WOW = new WOW({
    animateClass: "animate__animated",
    live: true,
  }).init()
}

// const WOWLoader = () =>
//   React.useLayoutEffect(() => {
//     console.log("cargar wow")
//     new WOW.WOW({
//       animateClass: "animate__animated",
//       live: true,
//     }).init()
//   }, [])

const IndexPage = () => {
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2300)
  }, [])

  return (
    <>
      {/* {WOWLoader()} */}
      {console.log("cargar todo")}
      <Seo
        title="John Niño Dev."
        description="John Niño site, here you will found: about, portfolio, download her CV, and contact form "
      />
      {/* {loading ? <Loader /> : null} */}
      <Layout>
        <SwiperSlide>
          <Home />
        </SwiperSlide>
        <SwiperSlide>
          <About />
        </SwiperSlide>
        <SwiperSlide>
          <Portfolio />
        </SwiperSlide>
        <SwiperSlide>
          <CvComponent />
        </SwiperSlide>
        <SwiperSlide>
          <Contacts />
        </SwiperSlide>
      </Layout>
    </>
  )
}

export default IndexPage
