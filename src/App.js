import React from "react"
import Login from "./Component/Login";
import Registration from "./Component/Registration";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import "./App.css"


function App() {

  return (
    <div >
      <Router>
        <Routes>
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Registration" element={<Registration />} />
          <Route exact path="/Home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
