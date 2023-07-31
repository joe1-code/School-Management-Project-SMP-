import React from "react";
import { Card } from "@mui/material";
import TextField from '@mui/material/TextField';
import Link from "@mui/material/Link";
import './reset.css';

function ResetPassword(){



    return(
        <div id="reset-container"> 
           <div id="reset-title">
            <h3>ManagementPortal.com</h3>
           </div>
            <Card id="reset-card">
            <div id="reset-fields">
          <TextField
            fullWidth
            id="code"
            label="Code"
            autoComplete="current-password"
            variant="filled"
          />
          <TextField
            fullWidth
            InputLabelProps={{ style: { fontSize: 13 } }}
            size="small"
            id="resetpass"
            type="password"
            label="New Password"
            margin="normal"
          />
          <TextField
            fullWidth
            InputLabelProps={{ style: { fontSize: 13 } }}
            size="small"
            id="resetpass"
            label="Repeat Password"
            type="password"
            margin="normal"
          />
           
        </div>
        <div id="resetbutton-div">
            <button id="resetbutton">Reset Password</button>
         </div>
            </Card>
           
        </div>
    )
}

export default ResetPassword;