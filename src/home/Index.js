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
  <Outlet/>
 </>

)
}
export default Index;