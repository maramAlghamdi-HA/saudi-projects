import HotelShot from "../styles/img/HotelShot.jpg"
import MBS from "../styles/img/MBS .jpg"
function RedSeaIslandAbout() {
  return (
    <>
      <section className="page-section" id="about">
        <div className="container">
          <div className="container row ">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase" style={{ color: "#908960" }}>
                ABOUT US
              </h2>
              <br />
              <br />
              <br />
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-6">
              <h4 className="service-heading" style={{ color: "#908960" }}>
                {" "}
                OUR BEGINNINGS
              </h4>
              <br />
              <h3 className="section-subheading text-muted" style={{ fontSize: "20px", color: "#F0F4C3" }}>
                The Red Sea Project is being created as a unique, luxury tourism destination that will embrace nature,
                culture and adventure, setting new standards in sustainable development and positioning Saudi Arabia on
                the global tourism map. announced by HRH Crown Prince Mohammad bin Salman bin Abdulaziz Al-Saud in 2017.
              </h3>
            </div>
            <div className="col-md-6">
              <img style={{ maxHeight: 400, width: 300 }} src={HotelShot} alt="resort-img" />
            </div>
          </div>
        </div>
      </section>
      <section className="page-section" id="services">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-6">
              <img style={{ maxHeight: 300, width: 300 }} src={MBS} alt="MBS" />
            </div>

            <div className="col-md-6">
              <h4 className="service-heading" style={{ color: "#908960" }}>
                VISION 2030
              </h4>
              <br />
              <h3 className="section-subheading text-muted" style={{ fontSize: "20px" }}>
                Vision 2030 is a bold blueprint intended to build the best future for Saudi Arabia. It is designed to
                harness and showcase the nation’s greatest strengths, build upon its leading role at the heart of Arab
                and Islamic worlds, and help to create a more sustainable economy by forging new and stronger cultural
                business connections with the world.
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default RedSeaIslandAbout
