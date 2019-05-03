import React from "react"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"

const FAQ = () => {
  return (
    <section id="faq" className="p-5 bg-dark text-white">
      <div className="container">
        <h1 className="text-center">Frequently Asked Questions</h1>
        <hr />
        <Accordion>
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  Question One
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <div className="card-body">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tempora quae eligendi dolorum saepe. Nulla laboriosam quo
                    deleniti doloremque iure vero iste debitis expedita itaque!
                    Perspiciatis natus nesciunt, provident eum, nostrum tempore
                    autem eveniet quasi voluptatum, velit quam porro ipsa eius.
                  </div>
                </Accordion.Collapse>
              </div>
              <div className="card">
                <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                  Question Two
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <div className="card-body">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tempora quae eligendi dolorum saepe. Nulla laboriosam quo
                    deleniti doloremque iure vero iste debitis expedita itaque!
                    Perspiciatis natus nesciunt, provident eum, nostrum tempore
                    autem eveniet quasi voluptatum, velit quam porro ipsa eius.
                  </div>
                </Accordion.Collapse>
              </div>
              <div className="card">
                <Accordion.Toggle as={Card.Header} variant="link" eventKey="2">
                  Question Three
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <div className="card-body">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tempora quae eligendi dolorum saepe. Nulla laboriosam quo
                    deleniti doloremque iure vero iste debitis expedita itaque!
                    Perspiciatis natus nesciunt, provident eum, nostrum tempore
                    autem eveniet quasi voluptatum, velit quam porro ipsa eius.
                  </div>
                </Accordion.Collapse>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <Accordion.Toggle as={Card.Header} variant="link" eventKey="3">
                  Question Four
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <div className="card-body">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tempora quae eligendi dolorum saepe. Nulla laboriosam quo
                    deleniti doloremque iure vero iste debitis expedita itaque!
                    Perspiciatis natus nesciunt, provident eum, nostrum tempore
                    autem eveniet quasi voluptatum, velit quam porro ipsa eius.
                  </div>
                </Accordion.Collapse>
              </div>
              <div className="card">
                <Accordion.Toggle as={Card.Header} variant="link" eventKey="4">
                  Question Five
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="4">
                  <div className="card-body">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tempora quae eligendi dolorum saepe. Nulla laboriosam quo
                    deleniti doloremque iure vero iste debitis expedita itaque!
                    Perspiciatis natus nesciunt, provident eum, nostrum tempore
                    autem eveniet quasi voluptatum, velit quam porro ipsa eius.
                  </div>
                </Accordion.Collapse>
              </div>
              <div className="card">
                <Accordion.Toggle as={Card.Header} variant="link" eventKey="5">
                  Question Six
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="5">
                  <div className="card-body">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tempora quae eligendi dolorum saepe. Nulla laboriosam quo
                    deleniti doloremque iure vero iste debitis expedita itaque!
                    Perspiciatis natus nesciunt, provident eum, nostrum tempore
                    autem eveniet quasi voluptatum, velit quam porro ipsa eius.
                  </div>
                </Accordion.Collapse>
              </div>
            </div>
          </div>
        </Accordion>
      </div>
    </section>
  )
}

export default FAQ
