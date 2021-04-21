import { Component } from "react"
import React from "react"
import NeomVideoToPlay from "./NeomVideoToPlay"
import NeomGallery from "./NeomGallery"
import NeomAbout from "./NeomAbout"

class NeomBody extends Component {
  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="row" style={{ backgroundColor: "black" }}>
            <div className="col-lg-12" style={{ textAlign: "center" }}>
              <NeomVideoToPlay />
            </div>
          </div>
        </div>
        <section style={{ backgroundColor: "#2A2B34" }} className="page-section" id="about">
          <NeomAbout />
          <br />
          <div className="container-fluid">
            <div className="row">
              <NeomGallery />
            </div>
          </div>
        </section>
      </>
    )
  }
}
export default NeomBody
