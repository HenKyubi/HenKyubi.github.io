import React from "react"

import image from "../images/designer-desk-display.jpg"

const PorfolioPage = () => (
  <div className="h-100 w-100 card d-flex flex-column ">
    <div className="my-auto">
      <div className="d-flex justify-content-center">
        <img className="img-portfolio" src={image} alt="Card image cap" />
      </div>
      <div className="card-body">
        <h5 className="fs-2 fw-bold text-center">Card title</h5>
        <p className="fs-6 text-center">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>

        <div className="d-flex justify-content-center">
          <a href="#" className="btn-porfolio-page">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  </div>
)
export default PorfolioPage
