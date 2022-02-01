import React from "react"

const Contacts = () => (
  <section id="contacts" class="contacts section">
    <div class="container">
      <div class="row">
        <div class="text-center col-md-8 col-md-offset-2">
          <h2 class="section-title">Keep in touch</h2>
        </div>
      </div>
      <div class="section-body">
        <div class="row-columns row">
          <div class="column col-md-7">
            <form class="form-request js-ajax-form">
              <div class="row">
                <div class="form-group col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    name="name"
                    required
                    placeholder="Name *"
                  />
                </div>
                <div class="form-group col-md-6">
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    required
                    placeholder="Email *"
                  />
                </div>
                <div class="form-group col-md-12">
                  <textarea
                    class="form-control"
                    rows="3"
                    name="message"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div class="col-md-12 text-right">
                  <button type="submit" class="btn" data-text-hover="Submit">
                    Send request
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div class="column col-md-4 col-md-offset-1">
            <div class="contact-line">
              <div class="media-left">
                <i class="text-primary icon ion-ios-telephone"></i>
              </div>
              <div class="media-right">
                <h4>Phone</h4>
                +57 316 335 00 25
              </div>
            </div>
            <div class="contact-line">
              <div class="media-left">
                <i class="text-primary icon ion-android-pin"></i>
              </div>
              <div class="media-right">
                <h4>Address</h4>
                Carrera 27 # 2-59,
                <br />
                Piso 1, Jose Antonio Galan (San Gil, Santander, Colombia)
              </div>
            </div>
            <div class="contact-line">
              <div class="media-left">
                <i class="text-primary icon ion-email"></i>
              </div>
              <div class="media-right">
                <h4>Email</h4>
                jhonnino@unisangil.edu.co
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Contacts
