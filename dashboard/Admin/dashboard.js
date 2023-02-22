import React from "react";
import ReactDOM from "react";
import Card from "@mui/material/Card";
import {useMediaQuery} from "react-responsive";
import './regMember.css';
import Header from "../../header/header";
import pic from '../../logo.jpg';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import { color } from "@mui/system";

function Dashboard(){
const isPortraitDashboard = useMediaQuery({ query: '(max-width: 360px)' });

 return (
  <>
   {isPortraitDashboard && <div>
   <Card id="card1">
      <div id="wrap1">
       <div id="logo">
         <img src={pic} id='avata'/>
       </div>
       <div id="icon">
         <NotificationsIcon id="notify"/>
        </div>
      </div>
      <div id="wrap2">
        <div id="names">
          <span>Juma Kapuya</span>
          <span>0786454532</span>
        </div>
        <div id="settings">
          <SettingsIcon/>
        </div>
      </div>
        
      
   </Card>
    <Card id="card2">
     <div id="spans">
      
        <div id="span1">
          <span id="debts">Debts</span>
          <span style={{fontSize:13,fontWeight:"bold"}}>10000</span>
        </div>
      
        <div id="span2">
          <span id="next">Next Payment</span>  
         <span style={{fontSize:13,fontWeight:"bold"}}>March 3 2023</span> 
        </div>
      
        <div id="span3">
           <span id="contri">Contribution</span>
           <span style={{fontSize:13,fontWeight:"bold"}}>300000</span> 
        </div>
    
     </div>
    </Card>
    <Card id="card3">
     <div>
      <button>Pay Debt</button>
      <button>Management Panel</button>
     </div>
    </Card>
  </div>}
  </>
 );
}

export default Dashboard;