import "../styles/css/Qiddiya.css"
import "../styles/css/bootstrap.min.css"
import "../styles/css/agency.min.css"
import { Image } from "react-bootstrap"

function QiddiyaDiscover() {
  return (
    <section id="Discover">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase" style={{ color: "rgb(0, 48, 102)" }}>
              DISCOVER
            </h2>
            <h3 className="section-subheading text-muted">
              Our five cornerstones guide the overall strategy for Qiddiya’s integrated development
            </h3>
          </div>

          <div className="col-md-4 text-center">
            <Image className="QiddiyaImage" src="https://qiddiya.com/media/1023/theme-parks.svg" roundedCircle />
            <h4 className="service-heading">Enjoy</h4>
            <p className="text-muted">PARKS & ATTRACTIONS</p>
            <p className="section-subheading">
              Parks & Attractions will open a cornerstone that sparks the imagination and allows people to enjoy a world
              of family fun by offering a range of entertainment options that encourage Saudis to try new things,
              creating family experiences and indelible memories.
            </p>
          </div>

          <div className="col-md-4 text-center">
            <Image
              className="QiddiyaImage"
              src="https://qiddiya.com/media/1054/performing-art-facilities.svg"
              roundedCircle
            />
            <h4 className="service-heading">Appreciate</h4>
            <p className="text-muted">ARTS & CULTURE</p>
            <p className="section-subheading">
              Arts & Culture will be the cornerstone to reflect, create and appreciate. By developing forums where
              artists can perform and train, Qiddiya will spawn an interest in the arts across society.
            </p>
          </div>

          <div className="col-md-4 text-center">
            <Image className="QiddiyaImage" src="https://qiddiya.com/media/1067/golf-course.svg" roundedCircle />
            <h4 className="service-heading">Aspire</h4>
            <p className="text-muted">SPORTS & WELLNESS</p>
            <p className="section-subheading">
              Sports & Wellness will be the cornerstone to aspire to a healthier society. By offering sports activities
              that improve the fitness of both novices and experts, Qiddiya will open minds to the possibility of change
              in oneself and others.
            </p>
          </div>

          <div className="col-md-6 text-center">
            <Image className="QiddiyaImage" src="https://qiddiya.com/media/1058/karting.svg" roundedCircle />
            <h4 className="service-heading">Advance</h4>
            <p className="text-muted">MOTION & MOBILITY</p>
            <p className="section-subheading">
              Motion & Mobility will be a cornerstone to advance new professional pursuits. By offering experiences
              where speed merges with science, Qiddiya will spark a spirit of innovation and technical curiosity.
            </p>
          </div>

          <div className="col-md-6 text-center">
            <Image className="QiddiyaImage" src="https://qiddiya.com/media/1075/safari-park.svg" roundedCircle />
            <h4 className="service-heading">Nurture</h4>
            <p className="text-muted">NATURE & ENVIRONMENT</p>
            <p className="section-subheading">
              Nature & Environment will showcase the natural world in a way that will nurture an ability to view one’s
              surroundings with new eyes. By developing a deeper knowledge of the land in which our visitors live,
              Qiddiya will open the cornerstone to respect and stewardship of our environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QiddiyaDiscover
