import Header from "./Header"
import Footer from "./Footer"
import Background from "../styles/img/QiddiyaBack.jpeg"
import QiddiyaComments from "./QiddiyaComments"
import QiddiyaBodyContent from "./QiddiyaBodyContent"
function Qiddiya() {
  return (
    <>
      <Header
        Background={{ backgroundImage: `url(${Background})` }}
        ProjectName="Welcome to Qiddiya's Project"
        description="Enjoy Discovering Qiddiya Project"
      />
      <QiddiyaBodyContent />
      <QiddiyaComments bgColorToComment={{ backgroundColor: "#001833" }} />
      <Footer />
    </>
  )
}
export default Qiddiya
