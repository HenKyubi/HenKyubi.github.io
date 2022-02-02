import React from "react"

const Contacts = () => (
  <section id="contacts" className="h-100 d-flex align-items-center">
    <div className="container">
      <div className="text-center">
        <h2>Keep in touch</h2>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control"
              name="name"
              required
              placeholder="Name *"
            />
          </div>
          <div className="form-group col-md-6">
            <input
              type="email"
              className="form-control"
              name="email"
              required
              placeholder="Email *"
            />
          </div>
          <div className="form-group col-md-12">
            <textarea
              className="form-control"
              rows="3"
              name="message"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="col-md-12 text-right">
            <button type="submit" className="btn" data-text-hover="Submit">
              Send request
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="contact-line">
            <div className="media-left">
              <i className="text-primary icon ion-ios-telephone"></i>
            </div>
            <div className="media-right">
              <h4>Phone</h4>
              +57 316 335 00 25
            </div>
          </div>
          <div className="contact-line">
            <div className="media-left">
              <i className="text-primary icon ion-android-pin"></i>
            </div>
            <div className="media-right">
              <h4>Address</h4>
              Carrera 27 # 2-59,
              <br />
              Piso 1, Jose Antonio Galan (San Gil, Santander, Colombia)
            </div>
          </div>
          <div className="contact-line">
            <div className="media-left">
              <i className="text-primary icon ion-email"></i>
            </div>
            <div className="media-right">
              <h4>Email</h4>
              jhonnino@unisangil.edu.co
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Contacts
