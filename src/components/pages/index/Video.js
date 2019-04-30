import React, { Component } from "react"
import Modal from "react-bootstrap/Modal"

class Video extends Component {
  state = {
    show: false,
  }

  handleClose = () => {
    this.setState({ show: false })
  }

  handleShow = () => {
    this.setState({ show: true })
  }

  render() {
    return (
      <section id="video-play">
        <div className="dark-overlay">
          <div className="row">
            <div className="col">
              <div className="container p-5 text-white text-center">
                <div className="video" onClick={this.handleShow}>
                  <i className="fas fa-play fa-3x" />
                </div>
                <h1>See What We Do</h1>
                <Modal
                  show={this.state.show}
                  onHide={this.handleClose}
                  animation="true"
                >
                  <Modal.Header closeButton />
                  <Modal.Body>
                    <div className="videoWrapper">
                      <iframe
                        title="What We Do"
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/eXO1EXDnCpE?autoplay=1&controls=0"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      />
                    </div>
                  </Modal.Body>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Video
