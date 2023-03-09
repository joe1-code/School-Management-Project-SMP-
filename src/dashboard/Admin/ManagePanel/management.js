import React from "react";
import { useMediaQuery } from "react-responsive";
import Card from "@mui/material/Card";
import './manage.css';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PaymentIcon from "@mui/icons-material/Payment";
import WindowIcon from '@mui/icons-material/Window';
import { useNavigate } from "react-router-dom";

function ManagementPanel(){
 const isPortraitPanel = useMediaQuery({ query: '(max-width: 360px)' });
 const navigate = useNavigate();
 function handleClick(url){
   navigate(url)
 }

 return (
  
  <>
   {isPortraitPanel && <div id="panCont">
    <Card id="wrap">
    <div id="container1">
     <Card id="element" onClick={()=>handleClick("/members")}>
      <PeopleAltIcon />
      <span>Members</span>
    </Card>
    <Card id="element" onClick={()=>handleClick("/regulations")}>
     
      <MenuBookIcon />
      <span>Regulations</span>
     
    </Card>
    </div>
    <div id="container2">
   <Card id="element">
     <PaymentIcon />
     <span>Accountant</span>     
   </Card>
    <Card id="element" onClick={()=>handleClick("/window")}>
      <WindowIcon />
      <span>Window</span>
     
    </Card>
    </div>
   </Card>
   
  
    
    </div>}
  </>
 )
   }
export default ManagementPanel;