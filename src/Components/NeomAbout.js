import { Component } from "react"
import React, { useState } from "react"
import NoCars from "../styles/img/no-cars.png"
import commute from "../styles/img/commute.png"
import Natural from "../styles/img/natural.png"
import Power from "../styles/img/power.png"
import Tech from "../styles/img/tech.jpg"

class NeomAbout extends Component {
  render() {
    const ReadMore = ({ children }) => {
      const text = children
      const [isReadMore, setIsReadMore] = useState(true)
      const toggleReadMore = () => {
        setIsReadMore(!isReadMore)
      }
      return (
        <p className="text">
          {isReadMore ? text.slice(0, 300) : text}
          <span onClick={toggleReadMore} className="read-or-hide" style={{ color: "white", fontWeight: "bold" }}>
            {isReadMore ? " READ MORE" : " SHOW LESS"}
          </span>
        </p>
      )
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2
              className="section-heading text-uppercase"
              style={{ color: "#C5B358", fontSize: "30px", fontWeight: "normal" }}
            >
              About
            </h2>
            <h3 className="section-subheading text-muted">
              <ReadMore>
                NEOM is vision of what the future will be. A home for people who dream big and want to build a new model
                for sustainable living.  NEOM is an accelerator of human progress and a vision of what a New Future
                might look like. It is a region in northwest Saudi Arabia on the Red Sea being built from the ground up
                as a living laboratory – a place where entrepreneurship will chart the course for this New Future. It
                will be a destination and a home for people who dream big and want to be part of building a new model
                for exceptional livability, creating thriving businesses, and reinventing environmental conservation.
                NEOM will be the home and workplace to more than a million residents from around the world. It will
                include towns and cities, ports and enterprise zones, research centers, sports and entertainment venues,
                and tourist destinations. As a hub for innovation, entrepreneurs, business leaders and companies will
                come to research, incubate and commercialize new technologies and enterprises in groundbreaking ways.
                Residents of NEOM will embody an international ethos and embrace a culture of exploration, risk-taking
                and diversity - all supported by a progressive law compatible with international norms and conducive to
                economic growth.
              </ReadMore>
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 style={{ color: "#C5B358", fontWeight: "normal", fontSize: "30px" }}>
              MODERN CITIES ARE UNSUSTAINABLE
            </h2>
            <h3 className="section-subheading text-muted">THERE IS A FUTURE, IT'S CALLED THE LINE</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul className="timeline">
              <li>
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid" src={NoCars} alt="No-car" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h2 style={{ color: "#C5B358", fontWeight: "normal", fontSize: "15px" }}>No Cars</h2>
                    <h3 className="section-subheading" style={{ color: "lightgray" }}>
                      Communities built for people with a five-minute walk to live, work and play.
                    </h3>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid" src={commute} alt="commute-icon" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h2 style={{ color: "#C5B358", fontWeight: "normal", fontSize: "15px" }}>MAX 20 Minute Commute</h2>
                    <h3 className="section-subheading " style={{ color: "lightgray" }}>
                      Less travel time between communities.
                    </h3>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid" src={Natural} alt="Natural" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h2 style={{ color: "#C5B358", fontWeight: "normal", fontSize: "15px" }}>
                      A City Integrated With Nature
                    </h2>
                    <h3 className="section-subheading" style={{ color: "lightgray" }}>
                      Restoring our connection with nature to improve our health and well-being for a happier lifestyle.
                    </h3>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid" src={Power} alt="power-energy" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h2 style={{ color: "#C5B358", fontWeight: "normal", fontSize: "15px" }}>
                      Powered By Clean Energy
                    </h2>
                    <h3 className="section-subheading" style={{ color: "lightgray" }}>
                      Abundant renewable energy for a sustainable future.
                    </h3>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid" src={Tech} alt="Tech-icon" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h2 style={{ color: "#C5B358", fontWeight: "normal", fontSize: "15px" }}>
                      Enabled By The Latest Tech
                    </h2>
                    <h3 className="section-subheading" style={{ color: "lightgray" }}>
                      Tech that continuously learns and improves to make life easier for all.
                    </h3>
                  </div>
                </div>
              </li>

              <li className="timeline-inverted">
                <div className="timeline-image" style={{ color: "black" }}>
                  <h4>
                    COME
                    <br />
                    TO VISIT
                    <br />
                    NEOM
                  </h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default NeomAbout
