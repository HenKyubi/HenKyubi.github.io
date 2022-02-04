import React from "react"

import { Swiper, SwiperSlide } from "swiper/react"
// import required modules
import { Pagination, Navigation } from "swiper"
import PorfolioPage from "./page-portfolio"

const MockData = {
  MSA: {
    imgPage: "",
    altImgPage: "",
    title: "MSA Energy",
    description: "",
    urlPage: "",
  },
  Heippi: {
    imgPage: "",
    title: "Heippi",
    description: "",
    urlPage: "",
  },
  Hocolg: {
    imgPage: "",
    title: "Heippi",
    description: "",
    urlPage: "",
  },
  Pokemon: {
    imgPage: "",
    title: "Heippi",
    description: "",
    urlPage: "",
  },
}
const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="container d-flex flex-column justify-content-center h-100"
    >
      <h2 className="text-center fs-1 fw-bold pb-3">Portfolio</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination]}
        className="mySwiper w-100 swiper-porfolio"
      >
        <SwiperSlide>
          <PorfolioPage />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Portfolio
