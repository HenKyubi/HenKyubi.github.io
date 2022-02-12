import * as React from "react"

//Swiper
import { Swiper } from "swiper/react"

import { Mousewheel, Pagination } from "swiper"

import Header from "./header.jsx"
import Footer from "./footer.jsx"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper swipper-layout"
      >
        {children}
      </Swiper>
      <Footer />
    </>
  )
}

export default Layout
