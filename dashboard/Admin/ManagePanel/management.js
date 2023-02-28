import React from "react";
import ReactDOM from "react";
import { useMediaQuery } from "react-responsive";
import Card from "@mui/material/Card";
import './manage.css';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import WindowIcon from '@mui/icons-material/Window';
import ConstructionIcon from '@mui/icons-material/Construction';
import { color } from "@mui/system";

function ManagementPanel(){
 const isPortraitPanel = useMediaQuery({ query: '(max-width: 360px)' });


 return (
  
  <>
   {isPortraitPanel && <div id="panCont">
    <Card id="wrap">
    <div id="container1">
     <Card id="element">
     
      <PeopleAltIcon />
      <span>Members</span>
     
    </Card>
    <Card id="element">
     
      <MenuBookIcon />
      <span>Regulations</span>
     
    </Card>
    </div>
    <div id="container2">
   <Card id="element">
     <ConstructionIcon />
     <span>Criteria</span>     
   </Card>
    <Card id="element">
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