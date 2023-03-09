import React from "react";
import ReactDOM from "react";
import Card from "@mui/material/Card";
import AccountTable from "../../../tables/accountantTable";
import './accountant.css';


function AccountantPanel(){
 return (
  <>
  <Card>
   <div>
    <div id="acctitle"><span>WINDOW 100</span></div>
    <Card id="acc1">
     <div id="div11">
      <span style={{fontSize:18,fontWeight:"bold"}}>Start</span>
      <span style={{color:"#7B7575",fontSize:14,fontWeight:"bold"}}>30/Feb/2022</span>
     </div>
     <div id="div12">
      <span style={{fontSize:18,fontWeight:"bold"}}>End</span>
      <span style={{color:"#7B7575",fontSize:14,fontWeight:"bold"}}>30/Feb/2023</span>
      </div>
     <div id="div13">
      <span style={{fontSize:18,fontWeight:"bold"}}>Amount</span>
      <span style={{color:"#7B7575",fontSize:14,fontWeight:"bold"}}>50,000</span>
     </div>
    </Card>
    <Card id="acc1">
     <div id="div11">
      <span style={{fontSize:18,fontWeight:"bold"}}>Payments</span>
      <span style={{color:"#7B7575",fontSize:14,fontWeight:"bold"}}>300,000</span>
     </div>
     <div id="div12"> 
      <span style={{fontSize:18,fontWeight:"bold"}}>Pending</span>
      <span style={{color:"#7B7575",fontSize:14,fontWeight:"bold"}}>500,000</span>
      </div>
     <div id="div13">
      <span style={{fontSize:18,fontWeight:"bold"}}>Debts</span>
      <span style={{color:"#7B7575",fontSize:14,fontWeight:"bold"}}>200,000</span>
      </div>
    </Card>
    <div>
     <AccountTable/>
    </div>
   </div>
   
  </Card>
  </>
 )
}

export default AccountantPanel;