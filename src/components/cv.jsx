import React from "react"

const CV = () => (
  <section id="CV" class="resume text-center bgc-light section">
    <div class="container">
      <div class="row">
        <div class="text-center col-md-8 col-md-offset-2">
          <h2 class="section-titler">View my resume</h2>
          <p class="lead-text">
            Download my CV and see in detail the projects in which I have
            participated.
          </p>
        </div>
      </div>
      <div class="section-buttons section-body-sm">
        <a href="/img/CV.pdf" download="CV John Henry Niño Pico" class="btn">
          Download CV
        </a>
      </div>
    </div>
  </section>
)

export default CV
