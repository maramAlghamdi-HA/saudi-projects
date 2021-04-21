import RedSeaIslandAbout from "./RedSeaIslandAbout"
import RedSeaIslandTimeLine from "./RedSeaIslandTimeLine"
import RedSeaIslandDestination from "./RedSeaIslandDestination"
function RedSeaislandBody() {
  return (
    <>
      <div style={{ backgroundColor: "#004D40", color: "#827717" }}>
        <RedSeaIslandAbout />

        <RedSeaIslandTimeLine />

        <RedSeaIslandDestination />
      </div>
    </>
  )
}
export default RedSeaislandBody
