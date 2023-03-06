import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./home/login";
import Index from "./home";
import Dashboard from "./dashboard/Admin/dashboard";
import ManagementPanel from "./dashboard/Admin/ManagePanel/management";
import RegisterGroup from "./home/registerGroup/registerGroup";
import RegisterMember from "./dashboard/Admin/ManagePanel/Member/registerMember";
import Member from "./dashboard/Admin/ManagePanel/Member/members";
import Regulations from "./dashboard/Admin/ManagePanel/Regulations/regulations";

function App(){
return (
  <div>
     <Routes>
      <Route path="/Home" element={<Index/>}/>
      <Route path="/registerMember" element={<RegisterMember />}/>
      <Route path="/registerGroup" element={<RegisterGroup />}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/panel" element={<ManagementPanel />}/>
      <Route path="/members" element={<Member />}/>
      <Route path="/regulations" element={<Regulations />}/>
      </Routes>

  </div>

)

}

export default App;