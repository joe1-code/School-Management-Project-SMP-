import React from "react";
import ReactDOM from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";

function RegisterGroup(){
 return (
  <div>
   <Card>
    <div>
      <TextField
     fullWidth
     label="Group Name"
     margin="normal"
     size="small"
     InputLabelProps={{type:{fontSize: 15}}}
/>
<TextField
     fullWidth
     label="Total Members"
     margin="normal"
     size="small"
     InputLabelProps={{type:{fontSize: 15}}}
/>
<TextField
     fullWidth
     label="Admin Full Name"
     margin="normal"
     size="small"
     InputLabelProps={{type:{fontSize: 15}}}
/>
<TextField
     fullWidth
     label="Mobile No."
     margin="normal"
     size="small"
     InputLabelProps={{type:{fontSize: 15}}}
/>
<TextField
     fullWidth
     label="Title"
     margin="normal"
     size="small"
     InputLabelProps={{type:{fontSize: 15}}}
/>
    </div>
    
   </Card>
  </div>
 )
}

export default RegisterGroup;