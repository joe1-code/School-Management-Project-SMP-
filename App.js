import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./home/login";
//import Index from "./home";
import Dashboard from "./dashboard/Admin/dashboard";


function App(){
return (
  <div>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
        
      </Routes>
    </BrowserRouter>

  </div>

)

}

export default App;