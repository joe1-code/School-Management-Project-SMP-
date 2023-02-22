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
import { Table } from "@mui/material";
import DataTable from "../tables/table";


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
          <span style={{fontSize:18,fontWeight:"bold"}}>Juma Kapuya</span>
          <span style={{color:"#7B7575",fontSize:14,fontWeight:"bold"}}>0786454532</span>
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
          <span style={{color:"#7B7575",fontSize:14,fontWeight:"bold"}}>10000</span>
        </div>
      
        <div id="span2">
          <span id="next">Next Payment</span>  
         <span style={{color:"#7B7575",fontSize:14,fontWeight:"bold"}}>March 3 2023</span> 
        </div>
      
        <div id="span3">
           <span id="contri">Contribution</span>
           <span style={{color:"#7B7575",fontSize:14,fontWeight:"bold"}}>300000</span> 
        </div>
    
     </div>
    </Card>
    <Card id="card3">
     <div id="wrap-but">
      <div id="but1">
       <button id="admin-But">Pay Debt</button>
      </div>
      <div id="but2">
       <button id="admin-But">Management Panel</button>
      </div>
     </div>
    </Card>
    <Card id="card4">
     <div>
       <span>report</span>
       <div id="items">
         <button id="sp1">Contributors</button>
         <button id="sp2">Expenditures</button>
         <button id="sp3">Debits</button>
         <button id="sp4">Profits</button>
       </div>
       <div>
         <DataTable/>
       </div>
      </div>
    </Card>
  </div>}
  </>
 );
}

export default Dashboard;