// import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Header from "./Header";
import Signup from "./Signup";
import FaireList from "./FaireList";

function App() {

  return (
    <div className="App">
      <Header />
      <Homepage />
      <Switch>
        <Route exact path="/">
          <h1>Homepage</h1>
        </Route>
        <Route exact path="/signup">
        <Signup />
        </Route>
        <Route exact path="/faire_list">
        <FaireList />
        </Route>
      </Switch>
    </div>
);
}

export default App;
