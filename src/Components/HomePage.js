import Slider from "react-animated-slider"
import "react-animated-slider/build/horizontal.css"
import "../styles/css/Slider-animations.css"
import "../styles/css/Style.css"
// import React, { Component } from "react"
import Neom from "../styles/img/Neom.jpeg"
import Qdy from "../styles/img/Qdy.jpeg"
import RedSea from "../styles/img/RedSea.jpeg"
import first from "../styles/img//first.jpg"

////////////////////////////////////////////////////////////
import React from "react"
import { useHistory } from "react-router-dom"
/////////////////////////////////////////////////////////////

const HomePage = props => {
  const history = useHistory()
  const content = [
    {
      title: "Saudi Projects",
      description:
        "MY PRIMARY GOAL IS TO BE AN EXEMPLARY AND LEADING NATION IN ALL ASPECTS, AND I WILL WORK WITH YOU IN ACHIEVING THIS ENDEAVOUR.",
      name: "King Salman Bin Abdulaziz Al-Saud",

      image: first,
    },
    {
      title: " A VISION OF A NEW FUTURE",
      description:
        "It’s an attempt to do something that’s never been done before and it’s coming at a time when the world needs fresh thinking and new solutions. Put simply, NEOM will not only be a destination, but a home for people who dream big and who want to be part of building a new model for sustainable living.",
      button: <button onClick={() => history.push("/Neom")}>Go to Neom</button>,
      image: Neom,
    },
    {
      title: " It’s time to have fun.",
      description:
        "Qiddiya has drawn on the Kingdom’s rich heritage to bring the world a destination like no other: a bold, new Capital of Entertainment, Sports, and the Arts. Qiddiya will be an integrated destination offering immersive experiences and memorable moments of delight.",
      button: <button onClick={() => history.push("/Qiddiya")}>Go to Qiddiya</button>,
      image: Qdy,
    },
    {
      title: " Unforgettable luxury",
      description:
        "The Red Sea Project will be an exquisite sanctuary offering indulgent experiences, seamlessly customized to the unique needs of each visitor. The site encompasses an archipelago of more than 90 pristine islands, miles of sweeping desert, and dramatic landscapes that include volcanoes, and canyons.",

      button: <button onClick={() => history.push("/RedSeaIsland")}>Go to RedSea</button>,
      image: RedSea,
    },
  ]

  return (
    <div>
      <Slider className="slider-wrapper" autoplay="3000">
        {content.map((item, index) => (
          <div key={index} className="slider-content" style={{ background: `url('${item.image}') no-repeat  center` }}>
            <div className="inner">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <h4>{item.name}</h4>
              {item.button}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default HomePage
