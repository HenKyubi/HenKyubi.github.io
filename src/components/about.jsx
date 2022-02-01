import React from "react"
import "../styles/about.scss"

const About = () => (
  // <main id="about">
  //   <div className="container">
  //     <div className="row">
  //       <div className="col-md-6">
  //         <div className="img">
  //           <img src="../images/me.jpg" alt="picture of John Niño" />
  //         </div>
  //       </div>
  //       <div className="col-md-6">
  //         <div></div>
  //         <div></div>
  //       </div>
  //     </div>
  //   </div>
  // </main>
  <section id="about" class="about section">
    <div class="container">
      <div class="row-padding row-columns row">
        <div class="col-padding column col-md-6 col-md-push-6">
          <h2 class="section-title">About me</h2>
          <p>
            Junior front-end developer, skills in React, Angular, HTML, CSS,
            JavaScript, Responsive Design. Knowledge of MySQL database engine,
            handling of GIT version control.
          </p>
          <div class="skills-bar">
            <div class="progress-bar-title">HTML</div>
            <div class="progress">
              <div class="progress-bar" data-width="85">
                <span>85%</span>
              </div>
            </div>
            <div class="progress-bar-title">CSS</div>
            <div class="progress">
              <div class="progress-bar" data-width="80">
                <span>80%</span>
              </div>
            </div>
            <div class="progress-bar-title">JavaScript</div>
            <div class="progress">
              <div class="progress-bar" data-width="75">
                <span>75%</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-padding column col-md-6 col-md-pull-6">
          <img alt="" class="img-responsive" src="img/me.jpg" />
        </div>
      </div>
    </div>
  </section>
)

export default About
