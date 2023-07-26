import { Home } from "@mui/icons-material";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Classes from "./Dashboard/class_components/classes";
import Login from "./Home/login/login";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/Auth0/Home" element={<Login/>} />
        <Route path="/Dashboard/classes" element={<Classes/>}/>
      </Routes>

    </div>

  )

}

export default App;