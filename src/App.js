import React from "react"
import Login from "./Component/Login";
import Registration from "./Component/Registration";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Registration" element={<Registration />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
