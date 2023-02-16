import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./home/login";
import Nopage from "./nopage";
import Header from "./header/header";
import RegisterGroup from "./home/registerGroup/registerGroup";
import RegisterMember from "./dashboard/Admin/registerMember";
import Dashboard from "./dashboard/Admin/dashboard";
function App(){
return (
  <div>
    <Header />
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/registerMember" element={<RegisterMember/>}/>
        <Route path="/registerGroup" element={<RegisterGroup />}/>
        <Route path="*" element={<Nopage />}/>
        <Route path="/dashboard" element={<Dashboard/>}/> 
      </Routes>
    </BrowserRouter>

  </div>

)

}

export default App;