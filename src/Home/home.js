import React from "react";
import { Card } from "@mui/material";
import TextField from '@mui/material/TextField';
import Link from "@mui/material/Link";

import './home.css';

function Login(){
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
              <Link href="/forgotpassword" style={{ color: "black", fontSize:13}}>Forgot Password?</Link>
            </div>
           
            <div id="butlog-div">
            <button id="but-log" style={{color:'white', size:'bolder'}}>Sign In</button>
            </div>
        </Card>
        </div>
      
    )
    
    
}

export default Login;