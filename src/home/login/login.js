import React from "react";
import './login.css';
// import "../header/header";
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Link from "@mui/material/Link";
import { useMediaQuery } from 'react-responsive'
import { useNavigate } from "react-router-dom";

function Login(){
 //const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  //const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(max-width: 360px)' })
  //const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
 const navigate=useNavigate();
 function navigation(url){
  navigate(url);
 }
 
 return (
  <div id="main">
   <h2 id="vicoba">Sign In to Vicoba App</h2>
  {isPortrait && <Card id="container-mobile">
   <div id="wrapper">
    <TextField
    fullWidth
     InputLabelProps={{style:{fontSize: 15}}}
     size="small" 
     id="user"
     label="Username"
     margin="normal"
    
    />
    <TextField
    InputLabelProps={{style:{fontSize: 15}}}
    size="small"
    id="pass"
    label="Password"
    type="password"
    variant="outlined"
    margin="normal"
    fullWidth
    />
   </div>
    
    <div id="wrap">
     <button variant="outlined" id="butlog" onClick={()=>navigation("/dashboard")}>Login</button>    
    </div>
     <h4 id="links">
     <Link href="/forgotpassword" style={{color:"blue"}}>Forgot Password?</Link>
     <Link href="/registerGroup" style={{color:"blue"}}>Create a new group?</Link>
    </h4>
    
    
  
    
  </Card>}
 
 </div>
  
  
 )
}

export default Login;