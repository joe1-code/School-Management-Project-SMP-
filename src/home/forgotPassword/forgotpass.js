import React from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import './forgotpass.css';

function Passcode(){
 return (
  <>
    <div id="forgottitle" style={{color:"#7B7575"}}><h3>Password recovery</h3></div>
   <Card id="forgot-wrap">
    <div id="forgotdiv">
     <TextField
      fullWidth
      InputLabelProps={{style:{fontSize: 15}}}
      size="small" 
      id="forgot"
      label="Phone No."
      margin="normal"
     />
    </div>
    
    <button id="forgotbut">Submit</button>
   </Card>
   </>
 ) 
}

export default Passcode;