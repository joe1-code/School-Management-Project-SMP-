import React from "react";
import ReactDOM from "react";
import './header.css';
import pic from'../logo.jpg';
import { useMediaQuery } from "react-responsive";
const Header=()=>{
  const isPortraitHeader= useMediaQuery({ query: '(max-width: 360px)' });
 
  return (
  <>
   {isPortraitHeader && <div id="header" onClick={()=> window.location('/')}><img src={pic} id='avt'  />  
    </div>} 
 </>
 
  )
 }

 export default Header;