import { Background } from "react-imgix"

import "../styles/css/Gallery.css"
import GalleryBackg from "../styles/img/GalleryBackg.jpg"
import groundUp from "../styles/img/groundUp.jpg"
import NatureProtofoilo from "../styles/img/NatureProtofoilo.jpg"
import ChildProtofoilo from "../styles/img/ChildProtofoilo.jpg"
import eyeProtofoilo from "../styles/img/eyeProtofoilo.jpg"
import LineProtofoilo from "../styles/img/LineProtofoilo.jpg"
import NightSkyProtofoilo from "../styles/img/NightSkyProtofoilo.jpg"
import NeomProtofoilo from "./NeomProtofoilo"

function GalleryNeom() {
  const portfolioLinks = [
    {
      title: "Built From The Ground Up",
      caption:
        "NEOM reimagines urban living by establishing walkability as its cornerstone. Communities will be built on a physical and digital infrastructure layer containing essential utilities and transportation services integrated below the surface.",
      url: groundUp,
    },
    {
      title: "Sustainability as The Main Driver",
      caption:
        "NEOM will introduce a new model for urban sustainability powered by 100% renewable energy. It will adopt environmental responsibility principles, that promote sustainable and regenerative development practices.",
      url: NatureProtofoilo,
    },
    {
      title: "Humanity-Centered",
      caption:
        "NEOM will be built around people, not cars, and designed for convenience and walkability. Adopting a pedestrian-first approach, all amenities will be within a five-minute walk.",
      url: ChildProtofoilo,
    },
    {
      title: "Economic Engine",
      caption:
        "NEOM will be a hub for innovation, where established global businesses and emerging players can research, incubate and commercialize groundbreaking technologies to accelerate human progress. Commerce and industry will be integrated into community centers to build supply chains that facilitate innovative and efficient operations.",
      url: eyeProtofoilo,
    },
    {
      title: "The Line",
      caption:
        "Enables future‑proof urbanization One of the main projects for NEOM is THE LINE, the core of its urban living.",
      url: LineProtofoilo,
    },
    {
      title: "Inside NEOM",
      caption:
        "Puting Nature FIRST! The Dreamers and Doers, Rethinking Water, Building The Schoole of The Future | Where humanity and nature live in harmony",
      url: NightSkyProtofoilo,
    },
  ]
  return (
    <>
      <Background className="hero-image" src={GalleryBackg}>
        <div className="text-top">
          <div>
            <span className="span">NEOM</span>
            <span className="span">WHERE</span>
          </div>
        </div>
        <div className="text-bottom">
          <div>THE NATURE COME!</div>
        </div>
      </Background>
      <div className="container-fluid">
        <NeomProtofoilo portfolioLinks={portfolioLinks}></NeomProtofoilo>
      </div>
    </>
  )
}
export default GalleryNeom
