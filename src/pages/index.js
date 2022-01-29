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
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  // <div>
  //   <Swiper
  //     direction={"vertical"}
  //     slidesPerView={1}
  //     spaceBetween={30}
  //     mousewheel={true}
  //     pagination={{
  //       clickable: true,
  //     }}
  //     modules={[Mousewheel, Pagination]}
  //     className="mySwiper"
  //   >
  //     {/* <SwiperSlide>Slide 1</SwiperSlide>
  //   <SwiperSlide>Slide 2</SwiperSlide>
  //   <SwiperSlide>Slide 3</SwiperSlide>
  //   <SwiperSlide>Slide 4</SwiperSlide>
  //   <SwiperSlide>Slide 5</SwiperSlide>
  //   <SwiperSlide>Slide 6</SwiperSlide>
  //   <SwiperSlide>Slide 7</SwiperSlide>
  //   <SwiperSlide>Slide 8</SwiperSlide>
  //   <SwiperSlide>Slide 9</SwiperSlide> */}
  //   </Swiper>
  // </div>

  // <Layout>
  // <Seo title="Home" />
  <>
    <Header />
    <main
      id="home"
      className="masthead masked"
      data-stellar-background-ratio="0.8"
    >
      <div className="opener rel-1">
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
    </main>
  </>
  // </Layout>
)

export default IndexPage
