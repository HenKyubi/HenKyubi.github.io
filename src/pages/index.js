import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

//Swiper
import Swiper from "swiper"
import "swiper/css"
import "swiper/css/bundle"
import "swiper/css/pagination"

// import "/src/components/swiper.css"
import { Mousewheel, Pagination } from "swiper"

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

//animate wow
import { WOW } from "wowjs"
import "animate.css"

import Header from "../components/header"
import Home from "../components/home"
import Layout from "../components/layout"
import Seo from "../components/seo"

window.WOW = WOW
const IndexPage = () => (
  <>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <Header />
    <Home />
  </>
)

export default IndexPage
