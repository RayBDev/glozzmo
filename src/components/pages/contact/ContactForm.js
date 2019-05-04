import React from "react"

const ContactForm = () => {
  return (
    <section id="contact" className="py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card p-4">
              <div className="card-body">
                <h4>Get In Touch</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione, itaque.
                </p>
                <h4>Address</h4>
                <p>550 Main St, Boston MA</p>
                <h4>Email</h4>
                <p>ray@glozzmo.com</p>
                <h4>Phone</h4>
                <p>(555) 555-5555</p>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card p-4">
              <div className="card-body">
                <h3 className="text-center">
                  Please fill out this form to contact us
                </h3>
                <hr />
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        placeholder="Message"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="submit"
                        value="Submit"
                        class="btn btn-outline-danger btn-block"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
