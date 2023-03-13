import React from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import './forgotpass.css';
import { useNavigate } from "react-router-dom";


function Passcode(){
  const navigation=useNavigate();
 function navigate(url){
  navigation(url)
 }
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
    
    <button id="forgotbut" onClick={()=>navigate("/resetpassword")}>Submit</button>
   </Card>
   </>
 ) 
}

export default Passcode;