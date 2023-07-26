import React from "react";
import { Card } from "@mui/material";
import TextField from '@mui/material/TextField';
import Link from "@mui/material/Link";


function Register(){
    
    return(
     <div>
        <Card>
         <TextField   
            fullWidth
            InputLabelProps={{ style: { fontSize: 13 } }}
            size="small"
            id="user"
            label="Username"
            margin="normal"
         />
        </Card>
     </div>
    )
}