import resort from "../styles/img/resort.jpg"
import RedSea from "../styles/img/RedSea.jpg"
import RedSeaVilla from "../styles/img/RedSeaVilla.jpg"
function RedSeaIslandDestination() {
  return (
    <>
      <section className="page-section" id="services">
        <div className="container">
          <div className="row"></div>
          <div className="row text-center">
            <div className="col-md-4">
              <h4 className="service-heading" style={{ color: "#908960" }}>
                An Exquisite Destination
              </h4>
              <p className="text-muted">
                A sanctuary offering indulgent experiences, seamlessly customized to the unique needs of each visitor.
                Extending over 28,000 square kilometres on Saudi Arabia’s Red Sea coast, the destination will offer a
                uniquely diverse range of experiences, from island getaways to resort holidays, mountain retreats and
                desert adventures.
              </p>
            </div>
            <div className="col-md-4">
              <img className="d-block w-100 " style={{ height: 300 }} src={resort} alt="resort-pic" />{" "}
            </div>
            <div className="col-md-4">
              <h4 className="service-heading" style={{ color: "#908960" }}>
                Globally accessible
              </h4>
              <p className="text-muted">
                With its own dedicated airport under development, the Red Sea Project will be easily accessible to
                visitors from around the world. At the crossroads of Europe, Asia and Africa, 250 million people will be
                within three hours flying time. With an average summer temperature of 32 degrees and 360 days of
                sunshine, the Red Sea Project will be a truly year-round destination.{" "}
              </p>
            </div>

            <div className="col-md-4">
              <img className="d-block w-100 " style={{ height: 300 }} src={RedSea} alt="red-sea-img" />
            </div>
            <div className="col-md-4">
              <h4 className="service-heading" style={{ color: "#908960" }}>
                Unforgettable luxury
              </h4>
              <p className="text-muted">
                Unforgettable luxury The Red Sea Project will be an exquisite sanctuary offering indulgent experiences,
                seamlessly customized to the unique needs of each visitor. The site encompasses an archipelago of more
                than 90 pristine islands, miles of sweeping desert and dramatic landscapes that include volcanoes, and
                canyons.
              </p>
            </div>
            <div className="col-md-4">
              <img className="d-block w-100 " style={{ height: 300 }} src={RedSeaVilla} alt="red-sea-villa" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default RedSeaIslandDestination
