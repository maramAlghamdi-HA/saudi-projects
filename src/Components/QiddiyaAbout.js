import "../styles/css/Qiddiya.css"
import "../styles/css/bootstrap.min.css"
import "../styles/css/agency.min.css"
import QiddiyaAboutImage from "../styles/img/QiddiyaAboutImage.jpeg"
import { Image } from "react-bootstrap"

function QiddiyaAbout() {
  return (
    <div className="container pt-2" id="about">
      <div className="row">
        <div className="col-lg-6 text-center  ">
          <Image id="imgAbout" src={QiddiyaAboutImage} />
        </div>
        <div className=" col-lg-6 text-center pt-4">
          <h1 className="section-heading HeadingLight">ABOUT</h1>
          <h3 className="section-subheading pt-3 subheadingLight">
            Qiddiya will be the capital of Entertainment, Sports, and the Arts in Saudi Arabia, an integrated
            destination offering immersive experiences and memorable moments of delight.Qiddiya is being built around
            five cornerstones: Parks & Attractions, Sports & Wellness, Motion & Mobility, Arts & Culture, and Nature &
            Environment. Our cornerstones are supported by our Real Estate & Community Services unit, which will create
            a thriving community with 5,000 residences.In short, Qiddiya will be an inspiring place for a youthful Saudi
            society to fulfill ambitions; a place where they can enjoy, appreciate, aspire, advance, and nurture their
            potential and stimulate interest in new professional pathways that help build a stronger future.
          </h3>
        </div>
      </div>
    </div>
  )
}

export default QiddiyaAbout
