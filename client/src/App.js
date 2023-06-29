import './App.css';
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
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
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login setUser={setUser} />}/>
        <Route path="/faire_list" element={<FaireList faires={faires} setFaires={setFaires} />}/>
        <Route path="/planner" element={<Planner user={user} notes={notes} setNotes={setNotes}/>}/>
      </Routes>
    </div>
);
}

export default App;
