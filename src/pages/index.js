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

import Header from "../components/header"
import Home from "../components/home"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <>
    <Header />
    <Home />
  </>
)

export default IndexPage
