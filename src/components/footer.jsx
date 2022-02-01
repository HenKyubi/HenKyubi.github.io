import React from "react"

const Footer = () => (
  <footer id="footer" className="footer text-center text-left-md bgc-dark">
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <div className="social">
            <a href="#" className="fa fa-facebook"></a>
            <a href="#" className="fa fa-twitter"></a>
            <a href="#" className="fa fa-pinterest"></a>
            <a href="#" className="fa fa-youtube-play"></a>
          </div>
        </div>
        <div className="col-md-7 text-right-md">
          <div className="copy">
            © {new Date().getFullYear()}. All rights reserved
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
