import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.scss";
import AuthPage from "./pages/AuthPage"
import NavBar from "./components/NavBar/NavBar"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/reg' component={AuthPage}>
            <AuthPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;