import Header from "./Header"
import Footer from "./Footer"
import Background from "../styles/img/RedSeaIslandBackg.jpg"
import RedSeaComments from "./RedSeaComments"
import RedSeaislandBody from "./RedSeaislandBody"
function RedSeaIsland() {
  return (
    <>
      <Header
        Background={{ backgroundImage: `url(${Background})` }}
        ProjectName="Welcome to Red Sea Island's Project"
        description="Enjoy Discovering Red Sea Islands"
      />
      <RedSeaislandBody />
      <RedSeaComments bgColorToComment={{ backgroundColor: "#908960" }} />
      <Footer />
    </>
  )
}
export default RedSeaIsland
