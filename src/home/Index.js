import React from "react";
import Passcode from './forgotPassword/forgotpass';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Reset from "./forgotPassword/resetpass";
import Login from "./login/login";
import Header from "./header/header";
import { Outlet } from "react-router-dom";

function Index(){
return (
 <>
  <Header/>
  <Route path="login" element={<Login/>}/>
   <Route path="forgotpassword" element={<Passcode/>}/>
   <Route path="resetpassword" element={<Reset/>}/>
  <Outlet/>
 </>

)
}
export default Index;