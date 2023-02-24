import React from "react";
import ReactDOM from "react";
import { useMediaQuery } from "react-responsive";
import Card from "@mui/material/Card";
function ManagementPanel(){
 const isPortraitPanel = useMediaQuery({ query: '(max-width: 360px)' });

 return (
  
   <>
   {isPortraitPanel && <Card id="wrap">
    <div id="container1">
     <Card>
     <div>
      <span>Manage Members</span>
     </div>
    </Card>
    <Card>
     <div>
      <span>Rules&Regulations</span>
     </div>
    </Card>
    </div>
    <div id="container2">
   <Card>
     <div>
      <span>Construct</span>
     </div>
    </Card>
    <Card>
     <div>
      <span>Window</span>
     </div>
    </Card>
    </div>
   </Card>
    
   }
  
  </>
  
  )
}

export default ManagementPanel;