import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import HomePage from "./Components/HomePage"

import "./App.css"
import Qiddiya from "./Components/Qiddiya"
import Neom from "./Components/Neom"
import RedSeaIsland from "./Components/RedSeaIsland"

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <HomePage />
//       </div>
//     )
//   }
// }

// export default App
const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/Neom" exact>
            <Neom />
          </Route>

          <Route path="/Qiddiya" exact>
            <Qiddiya />
          </Route>

          <Route path="/RedSeaIsland" exact>
            <RedSeaIsland />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
