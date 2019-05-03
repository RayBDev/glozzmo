import React from "react"
import Slider from "react-slick"

const Testimonials = () => {
  const sliderSettings = {
    infinite: true,
    slideToShow: 1,
    slideToScroll: 1,
  }
  return (
    <section id="testimonials" className="p-4 bg-dark text-white">
      <div className="container">
        <h2 className="text-center">Testimonials</h2>
        <div className="row text-center">
          <div className="col">
            <Slider {...sliderSettings}>
              <div>
                <blockquote class="blockquote">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nihil, nisi.
                  </p>
                  <footer className="blockquote-footer">
                    John Doe From <cite title="Company 1">Company 1</cite>
                  </footer>
                </blockquote>
              </div>
              <div>
                <blockquote class="blockquote">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nihil, nisi.
                  </p>
                  <footer className="blockquote-footer">
                    Sam Smith From <cite title="Company 2">Company 2</cite>
                  </footer>
                </blockquote>
              </div>
              <div>
                <blockquote class="blockquote">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nihil, nisi.
                  </p>
                  <footer className="blockquote-footer">
                    Mary Jane From <cite title="Company 3">Company 3</cite>
                  </footer>
                </blockquote>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
