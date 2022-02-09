import * as React from "react"
import PropTypes from "prop-types"

//Swiper
import { Swiper } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-flip"

import { Mousewheel, Pagination } from "swiper"

import Header from "./header.jsx"
import Footer from "./footer"

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

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
