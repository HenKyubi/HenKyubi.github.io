import * as React from "react"
import PropTypes from "prop-types"

//Swiper
import { Swiper } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Mousewheel, Pagination } from "swiper"

import "../styles/layout.scss"
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

      {/* <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
