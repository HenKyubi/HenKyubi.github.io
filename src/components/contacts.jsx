import React from "react"

//Lotties
import Lottie from "react-lottie"
// import animationDataAddress from "../lotties/address.json"
import animationDataPhone from "../lotties/phone.json"
import animationDataAddress from "../lotties/delivery-address.json"
import animationDataEmail from "../lotties/new-mail.json"

const defaultOptionsAddress = {
  loop: true,
  autoplay: true,
  animationData: animationDataAddress,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
}
const defaultOptionsPhone = {
  loop: true,
  autoplay: true,
  animationData: animationDataPhone,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
}
const defaultOptionsEmail = {
  loop: true,
  autoplay: true,
  animationData: animationDataEmail,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
}

const Contacts = () => (
  <section id="contacts" className="h-100 d-flex align-items-center">
    <div className="container">
      <div className="text-center pb-4">
        <h2>Keep in touch</h2>
      </div>
      <div className="row justify-content-around">
        <div className="row col-md-6 col-lg-7">
          <div className="form-group col-md-6 pb-2">
            <input
              type="text"
              className="form-control"
              name="name"
              required
              placeholder="Name *"
            />
          </div>
          <div className="form-group col-md-6 pb-2">
            <input
              type="email"
              className="form-control"
              name="email"
              required
              placeholder="Email *"
            />
          </div>
          <div className="form-group col-md-12 pb-2">
            <textarea
              className="form-control"
              rows="5"
              name="message"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="col-md-12 d-flex justify-content-center justify-content-md-end">
            <button
              type="submit"
              className="btn-outline"
              data-text-hover="Submit"
            >
              Send request
            </button>
          </div>
        </div>
        <div className="col-md-6 col-lg-5">
          <div className="px-4">
            <div className="row contact-card mb-2">
              <div className="col-2 d-flex justify-content-center ">
                <div className="d-flex align-items-center">
                  <Lottie
                    options={defaultOptionsPhone}
                    height={30}
                    width={30}
                  />
                </div>
              </div>
              <div className="col-10 d-flex flex-column">
                <h4 className="mb-0">Phone</h4>
                <p className="m-0">+57 316 335 00 25</p>
              </div>
            </div>
            <div className="row contact-card mb-2">
              <div className="col-2 d-flex justify-content-center ">
                <div className="d-flex align-items-center">
                  <Lottie
                    options={defaultOptionsAddress}
                    height={30}
                    width={30}
                  />
                </div>
              </div>
              <div className="col-10 d-flex flex-column">
                <h4 className="mb-0">Address</h4>
                <p className="m-0">
                  Carrera 27 # 2-59 <br /> Jose Antonio Galan <br />
                  (San Gil, Santander, Colombia)
                </p>
              </div>
            </div>
            <div className="row contact-card mb-2">
              <div className="col-2 d-flex justify-content-center ">
                <div className="d-flex align-items-center">
                  <Lottie
                    options={defaultOptionsEmail}
                    height={30}
                    width={30}
                  />
                </div>
              </div>
              <div className="col-10 d-flex flex-column">
                <h4 className="mb-0">Email</h4>
                <p className="m-0">jhonnino@unisangil.edu.co</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Contacts
