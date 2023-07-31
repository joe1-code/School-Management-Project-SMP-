import React from "react";
import { Card } from "@mui/material";
import TextField from '@mui/material/TextField';
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";

import './login.css';

function Login(){
  const navigate = useNavigate();
    return(

        <div id="container">
           <div>
            <h3>ManagementPortal.com</h3>
           </div>
              <Card id="home-card">
            <div id="home"> 
              <TextField   
                fullWidth
                InputLabelProps={{ style: { fontSize: 13 } }}
                size="small"
                id="user"
                label="Username"
                margin="normal"
              />
              

              <TextField
                fullWidth
                InputLabelProps={{ style: { fontSize: 13 } }}
                size="small"
                id="pass"
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
              />
            
               
            
            </div>
            <div id="forgotPass">
              <Link onClick={()=>{window.location.replace("/Auth0/forgotPasscode")}} style={{ color: "black", fontSize:13}}>Forgot Password?</Link>
            </div>
           
            <div id="butlog-div">
            <button id="but-log" style={{color:'white', size:'bolder'}} onClick={()=>{window.location.replace("/Dashboard/classes")}}>Sign In</button>
            </div>
        </Card>
        </div>
      
    )
    
    
}

export default Login;