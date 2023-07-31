import React from "react";
import { Card } from "@mui/material";
import TextField from '@mui/material/TextField';
import Link from "@mui/material/Link";
import './forgot.css';


function ForgotPassword(){
    return(
        <div id="forgot-container">
            <div id="forgot-title">
            <h3>ManagementPortal.com</h3>
           </div>
            <Card id="forgot-card">
                     
                <div id='phone-div'>
                    
                    <TextField   
                        fullWidth
                        InputLabelProps={{ style: { fontSize: 13 } }}
                        size="small"
                        id="forgot"
                        label="Phone No."
                        margin="normal"
                        variant="outlined"
                    />
                    
                </div>   
                

                <div id="forgotbut-div">
                    <button id="forgotbut">Send Password Reset</button>
                </div>

            </Card>
        </div>
    )
}

export default ForgotPassword;