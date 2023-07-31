import { Home } from "@mui/icons-material";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Classes from "./Dashboard/class_components/classes";
import Subjects from "./Dashboard/subjects_list/subjects";
import ForgotPassword from "./Home/forgotPassword/forgotPassword";
import Login from "./Home/login/login";
import ResetPassword from "./Home/resetPassword/resetPassword";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/Auth0/Home" element={<Login/>} />
        <Route path="/Auth0/forgotpasscode" element={<ForgotPassword/>}/>
        <Route path="/Auth0/resetpassword" element={<ResetPassword/>}/>
        <Route path="/Dashboard/classes" element={<Classes/>}/>
        <Route path="/Dashboard/list" element={<Subjects/>}/>
      </Routes>

    </div>

  )

}

export default App;