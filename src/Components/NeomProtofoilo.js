import React from "react"

export default ({ portfolioLinks }) => {
  return (
    <section className="page-section">
      <div className="row" style={{ backgroundColor: "#2A2B34" }}>
        <div className="col-lg-12 text-center">
          <h2 className="section-heading" style={{ color: "#C5B358", fontSize: "30px", fontWeight: "normal" }}>
            {" "}
            For More!
          </h2>
          <h3 className="section-subheading text-uppercase text-muted">WHAT'S HAPPENING AT NEOM</h3>
        </div>
      </div>

      <div className=" row" style={{ textAlign: "center" }}>
        {portfolioLinks &&
          portfolioLinks.map((oneContent, index) => (
            <div key={index} className="col-md-4 p-3">
              <img
                style={{ borderRadius: "10px" }}
                width="240px"
                height="200px"
                src={oneContent.url}
                alt="portfolio_img"
                className="p-1"
              />

              <h4 className="mt-3" style={{ color: "#C5B358", fontSize: "30px", fontWeight: "normal" }}>
                {oneContent.title}
              </h4>
              <h3 className="section-subheading text-muted">{oneContent.caption}</h3>
            </div>
          ))}
      </div>
    </section>
  )
}
