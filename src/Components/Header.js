import Logo from "../styles/img/logo.png"
import { Nav, Navbar } from "react-bootstrap"
import { useHistory } from "react-router-dom"

const Header = props => {
  const history = useHistory()
  return (
    <>
      <Navbar className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav" expand="lg">
        <Navbar.Brand href="#home" className="navbar-brand js-scroll-trigger" href="#page-top">
          <img src={Logo} style={{ height: "80px", width: "80px" }} alt="logo-icon" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav text-uppercase ml-auto">
            <Nav.Link className="nav-item" href="/">
              <p onClick={() => history.push("/")}>Home</p>
            </Nav.Link>
            <Nav.Link className="nav-item" href="#about">
              About
            </Nav.Link>
            <Nav.Link className="nav-item" href="#Comments">
              Comments
            </Nav.Link>
            <Nav.Link className="nav-item" href="#team">
              Website Developers
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <header className="masthead" style={props.Background}>
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">{props.ProjectName}</div>
            <div className="intro-heading ">{props.description}</div>
          </div>
        </div>
      </header>
    </>
  )
}
export default Header
