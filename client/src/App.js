import './App.css';
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Header from "./Header";
import Signup from "./Signup";
import Login from "./Login";
import FaireList from "./FaireList";
import Planner from "./Planner";

function App() {

  const [user, setUser] = useState(null)
  const [faires, setFaires] = useState([])
  const [notes, setNotes] = useState("")


  useEffect(() => {
    fetch('/faires')
        .then(res => res.json())
        .then(data => setFaires(data)
        )
    }, [])

      // if(!user) return <Login />

      useEffect(() => {
        fetch('/me')
        .then(res => {
          if (res.ok) {
            res.json()
        .then((user) => setUser(user))
          }
        })      
      }, [])


  return (
    <div className="App">
      <Header user={user} setUser={setUser}/>
      <Switch>
        <Route exact path="/homepage">
          <Homepage />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/login">
          <Login setUser={setUser} />
        </Route>
        <Route exact path="/faire_list">
          <FaireList faires={faires} setFaires={setFaires} />
        </Route>
        <Route exact path="/planner">
          <Planner user={user} notes={notes} setNotes={setNotes}/>
        </Route>
      </Switch>
    </div>
);
}

export default App;
