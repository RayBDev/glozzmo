import React from "react"

const Footer = () => {
  return (
    <footer id="main-footer" className="text-center text-white p-4">
      <div className="container">
        <div className="row">
          <div className="col">
            <p>Copyright &copy; {new Date().getFullYear()} Glozzmo</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
