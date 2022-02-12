import * as React from "react"

//Styles
import "../styles/index.scss"

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

//Swiper
import { SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"

//animate wow
// import WOW from "wowjs"
// import "animate.css"

//components
import Seo from "../components/seo.js"
import Layout from "../components/layout.jsx"
import Home from "../components/home.jsx"
import About from "../components/about.jsx"
import Portfolio from "../components/portfolio.jsx"

import Contacts from "../components/contacts.jsx"
import Loader from "../components/loader.jsx"
import CvComponent from "../components/cvComponent"

// window.WOW = WOW
const IndexPage = () => {
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2300)
  }, [])

  return (
    <>
      <Seo
        title="John Niño Dev."
        description="John Niño site, here you will found: about, portfolio, download her CV, and contact form "
      />
      {loading ? <Loader /> : null}
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
