import React from "react"

const Newsletter = () => {
  return (
    <section id="newsletter" className="text-center p-5 bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Sign Up For Our Newsletter</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio perspiciatis eum voluptates assumenda! Ducimus esse
              nisi omnis natus provident voluptatem!
            </p>
            <form className="form-inline justify-content-center">
              <input
                type="text"
                className="form-control mb-2 mr-2"
                placeholder="Enter Name"
              />
              <input
                type="email"
                className="form-control mb-2 mr-2"
                placeholder="Enter Email"
              />
              <button className="btn btn-primary mb-2">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
