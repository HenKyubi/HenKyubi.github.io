import React from "react"

//formspree
import { useForm, ValidationError } from "@formspree/react"

//Lotties
import Lottie from "react-lottie"
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

const Contacts = () => {
  const [state, handleSubmit] = useForm("mvolkqke")
  if (state.succeeded) {
    return <p>Thanks for joining!</p>
  }
  return (
    <section id="contacts" className="h-100 d-flex align-items-center area">
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="container contacts-body">
        <div className="text-center pb-2 pb-md-4">
          <h2 className="fw-bold fs-1">Keep in touch</h2>
        </div>
        <div className="row justify-content-around">
          <form className="row col-md-6 col-lg-7" onSubmit={handleSubmit}>
            <div className="form-group col-md-6 pb-2">
              <input
                id="name"
                type="text"
                name="name"
                className="form-control fs-6"
                required
                placeholder="Name *"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div className="form-group col-md-6 pb-2">
              <input
                className="form-control fs-6"
                id="email"
                type="email"
                name="email"
                required
                placeholder="Email *"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="form-group col-md-12 pb-2">
              <textarea
                id="message"
                name="message"
                className="form-control fs-6"
                rows="5"
                placeholder="Message"
                required
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <div className="col-md-12 d-flex justify-content-center justify-content-md-end pb-2">
              <button
                type="submit"
                className="btn-send-request fw-bold"
                data-text-hover="Submit"
                disabled={state.submitting}
              >
                Send request
              </button>
            </div>
          </form>
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
                  <h4 className="mb-0 fs-5 fw-bold lh-1">Phone</h4>
                  <p className="m-0 fs-6 card-contact-text ">
                    +57 316 335 00 25
                  </p>
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
                  <h4 className="mb-0 fw-bold fs-5">Address</h4>
                  <p className="m-0 fs-6 lh-1 pb-2 pb-mb-0 card-contact-text">
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
                  <h4 className="mb-0 fs-5 fw-bold lh-1 ">Email</h4>
                  <p className="m-0 fs-6 card-contact-text">
                    jhonnino@unisangil.edu.co
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts
