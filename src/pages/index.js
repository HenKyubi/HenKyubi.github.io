import * as React from "react"

//Styles
import "../styles/index.scss"

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

import { SwiperSlide } from "swiper/react"

//animate wow
import WOW from "wowjs"
import "animate.css"

//components
import Seo from "../components/seo"
import Layout from "../components/layout"
import Home from "../components/home"
import About from "../components/about"
import Portfolio from "../components/portfolio"
import CV from "../components/cv"
import Contacts from "../components/contacts"
import Loader from "../components/loader"

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
      {/* <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script> */}
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
          <CV />
        </SwiperSlide>
        <SwiperSlide>
          <Contacts />
        </SwiperSlide>
      </Layout>
    </>
  )
}

export default IndexPage
