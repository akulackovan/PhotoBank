import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.scss";
import RegPage from "./pages/RegPage"
import NavBar from "./components/NavBar/NavBar"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/reg' component={RegPage}>
            <RegPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;