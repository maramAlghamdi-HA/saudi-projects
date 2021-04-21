import Header from "./Header"
import Footer from "./Footer"
import NeomBody from "./NeomBody"
import Background from "../styles/img/NeomBackg.jpg"
import NeomComments from "./NeomComments"
function Neom(props) {
  return (
    <>
      <Header
        Background={{ backgroundImage: `url(${Background})` }}
        ProjectName="Welcome to Neom's Project"
        description="Enjoy Discovering NEOM Project"
      />
      <NeomBody />
      <NeomComments bgColorToComment={{ backgroundColor: "#2A2B34" }} />
      <Footer />
    </>
  )
}
export default Neom
