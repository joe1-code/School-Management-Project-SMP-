import React from "react";
import { Card } from "@mui/material";
import TextField from '@mui/material/TextField';
import Link from "@mui/material/Link";

import './home.css';

function Login(){
    return(
        <div id="container">
              <Card id="home-card">
            <div id="home"> 
              <TextField   
                mediumWidth
                InputLabelProps={{ style: { fontSize: 15 } }}
                size="small"
                id="user"
                label="Username"
                margin="normal"
              />
              

              <TextField
                mediumWidth
                InputLabelProps={{ style: { fontSize: 15 } }}
                size="small"
                id="pass"
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
              />
            
               <Link href="/forgotpassword" style={{ color: "blue" }}>Forgot Password?</Link>
            
            </div>
           
            <div>
            <button id="but-log">login</button>
            </div>
        </Card>
        </div>
      
    )
    
    
}

export default Login;