import React from "react";
import ReactDOM from "react";
import Card from "@mui/material/Card";
function Dashboard(){
 return (
  <div>
   <Card>
    <div id="logo">
     <p>Logo and Notification</p>
    </div>
    <div>
     <p>Full Name: Paul Sichula</p>
     <p>Mobile Number: 0785 234567</p>
    </div>
   </Card>
    <Card>
     <p>card 2</p>
    </Card>
    <Card>
     card 3
    </Card>
  </div>
 );
}

export default Dashboard;