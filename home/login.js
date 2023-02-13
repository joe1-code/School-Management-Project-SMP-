import React from "react";
import ReactDOM from "react";
import './login.css';
import "../header/header";

function Login(){
 
 return (
  <div id="container">
   <form action="" id="form">
   <div id="field">
    <input type="text" name="username" placeholder="username" id="user" />
    <input type="text" name="Password" placeholder="Password" id="pass"/>
   <div id="logbutton">
    <div>
     <input type="checkbox" />
     <label htmlFor="remember">remember me</label>
    </div>
    <button id="butlog">Login</button>
   </div>
   <div id="links">
    <a href="">Forgot Password</a>
    <a href="">Create a new group</a>
   </div>
   </div>
   
   
  </form>
  
   

  </div>
  
 )
}

export default Login;