import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./home/login";
import Nopage from "./nopage";
import Header from "./header/header";


function App(){
return (
  <div>
    <Header />
 <BrowserRouter>
  <Routes>
     <Route path="/" element={<Login />}/>
     <Route path="*" element={<Nopage />}/>
    
  </Routes>
</BrowserRouter>

  </div>

)

}

export default App;