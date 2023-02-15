import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
//import MyComponent from "./test";
import Login from "./home/login";
import Nopage from "./nopage";
import Header from "./header/header";
import RegisterGroup from "./home/registerGroup/registerGroup";
import RegisterMember from "./dashboard/Admin/registerMember";
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
    
  </Routes>
</BrowserRouter>

  </div>

)

}

export default App;