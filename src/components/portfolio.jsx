import React from "react"

//Swiper
import { Swiper, SwiperSlide } from "swiper/react"
// import required modules
import { Pagination, Autoplay } from "swiper"
import PorfolioPage from "./porfolio-page"

//Import images
import imgMSA from "../images/msaenergy.png"
import imgHeippi from "../images/heippi.png"
import imgHocol from "../images/hocol.png"
import imgPokemon from "../images/pokemon.png"
import imgAkelabPeliculas from "../images/akelab-peliculas.png"
import imgFynkus from "../images/fynkus.png"

const MockData = [
  {
    imgPage: imgMSA,
    altImgPage: "Capture of MSA energy page",
    title: "MSA Energy",
    description:
      "Landing page designed in Figma, developed in Gatsby-Bootstrap-GraphQL-Sanity-SASS, with AWS continuous integration.",
    urlPage: "",
  },
  {
    imgPage: imgHeippi,
    altImgPage: "Capture of Heippi page",
    title: "Heippi",
    description:
      "Landing page designed in Figma, developed in Gatsby-Bootstrap-GraphQL-Sanity-SASS, with AWS continuous integration.",
    urlPage: "https://heippi.com/",
  },
  {
    imgPage: imgHocol,
    altImgPage: "Capture of hocol",
    title: "Hocol",
    description:
      "Landing page designed in Figma, developed in Gatsby-Bootstrap-GraphQL-Sanity-SASS, with AWS continuous integration.",
    urlPage: "https://www.hocolroofing.com/",
  },
  {
    imgPage: imgPokemon,
    altImgPage: "Capture of Pokemon-Gatsby page",
    title: "Pokemon",
    description:
      "I develop a web interface (SPA) in which you can search, filter and expand information about different Pokemon. Using Gatsby-React-Hooks-NodeJs-Redux-Bootstrap-Axios.",
    urlPage: "https://henkyubi666.github.io/Pokemon-gatsby/",
  },
  {
    imgPage: imgAkelabPeliculas,
    altImgPage: "Capture of Akelab peliculas page",
    title: "Akelab Peliculas",
    description:
      "I develop a web interface (SPA) in which you can search, filter and expand information about different movies. Using Gatsby-React-Hooks-NodeJs-Express-Bootstrap.",
    urlPage: "https://henkyubi666.github.io/akelab/",
  },
  {
    imgPage: imgFynkus,
    altImgPage: "Capture of Fynkus page",
    title: "Fynkus",
    description:
      "I develop a mobile application with Dart - Flutter consuming API, and DDD+Bloc architecture, which manages farms for a client",
    urlPage:
      "https://play.google.com/store/apps/details?id=fynkus.administracionfincas&hl=es&gl=US",
  },
]
const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className=" d-flex flex-column justify-content-center h-100 "
    >
      <div className="container d-flex flex-column justify-content-center h-100 ">
        <h2 className="text-center fs-1 fw-bold pb-3">Portfolio</h2>
        <div className="porfolio-slide">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="mySwiper w-100 swiper-porfolio"
          >
            {MockData.map((project, key) => {
              return (
                <SwiperSlide key={`slide-portfolio-${key}`}>
                  <PorfolioPage
                    imgPage={project?.imgPage}
                    altImgPage={project?.altImgPage}
                    title={project?.title}
                    description={project?.description}
                    urlPage={project?.urlPage}
                  />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
