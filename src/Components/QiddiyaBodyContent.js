import "../styles/css/Qiddiya.css"
import "../styles/css/bootstrap.min.css"
import "../styles/css/agency.min.css"
import QiddiyaSlider from "./QiddiyaSlider"
import QiddiyaDiscover from "./QiddiyaDiscover"
import QiddiyaTime from "./QiddiyaTime"
import QiddiyaAbout from "./QiddiyaAbout"

function QiddiyaBodyContent() {
  return (
    <>
      <div className="page-section" style={{ backgroundColor: "#001833" }}>
        <QiddiyaAbout />
        {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <QiddiyaDiscover />

        {/* /////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <QiddiyaSlider />

        {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <QiddiyaTime />
      </div>
    </>
  )
}
export default QiddiyaBodyContent
