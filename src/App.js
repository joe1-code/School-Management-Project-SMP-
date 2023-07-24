import { Home } from "@mui/icons-material";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Home/home";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/Auth0/Home" element={<Login/>} />
      </Routes>

    </div>

  )

}

export default App;