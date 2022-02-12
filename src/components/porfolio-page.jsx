import React from "react"

const PorfolioPage = ({ imgPage, altImgPage, title, description, urlPage }) => (
  <div className="h-100 w-100 card d-flex flex-column porfolio-slide">
    <div className="my-auto">
      <div className="d-flex justify-content-center">
        <img className="img-portfolio" src={imgPage} alt={altImgPage} />
      </div>
      <div className="card-body">
        <h5 className="fs-2 fw-bold text-center">{title}</h5>
        <p className="fs-6 text-center">{description}</p>

        <div className="d-flex justify-content-center">
          <a href={urlPage} className="btn-porfolio-page text-center">
            Go
          </a>
        </div>
      </div>
    </div>
  </div>
)
export default PorfolioPage
