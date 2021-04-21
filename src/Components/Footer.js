function Footer(props) {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <span className="copyright">Copyright &copy; Our Website 2021</span>
            </div>
            <div className="col-md-6">
              <h6>Developers</h6>
              <ul className="list-inline social-buttons" id="team">
                <li className="list-inline-item">
                  <a target="_blank" href="https://www.linkedin.com/in/nouf-al-ziyadi/" rel="noreferrer">
                    <i className="fa fa-linkedin"></i>
                    <span style={{ color: "black", fontSize: 15 }}>Nouf</span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a target="_blank" href="https://www.linkedin.com/in/maram-hamed-alali/" rel="noreferrer">
                    <i className="fa fa-linkedin"></i>
                    <span style={{ color: "black", fontSize: 15 }}>Maram</span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a target="_blank" href="http://linkedin.com/in/saja-alqahtani" rel="noreferrer">
                    <i className="fa fa-linkedin"></i>
                    <span style={{ color: "black", fontSize: 15 }}>Sajaa</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
export default Footer
