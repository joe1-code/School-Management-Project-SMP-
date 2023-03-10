import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from "../header/header";
import Nopage from "../nopage";
import Login from "./login";
import RegisterGroup from "./registerGroup/registerGroup";



function Index(){
return (
  <div>
    <Header/>
     <Routes>
        <Route exact path="/" element={<Login />}/>
        <Route path="/registerGroup" element={<RegisterGroup />}/>
        <Route path="*" element={<Nopage />}/>
        
      </Routes>

  </div>

)

}

export default Index;