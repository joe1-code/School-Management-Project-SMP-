import React from "react";
import ReactDOM from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Select from 'react-select';
import './regGroup.css';
import { useMediaQuery } from 'react-responsive'


function RegisterGroup(){
 const isPortraitGroup = useMediaQuery({ query: '(max-width: 360px)' });
 
 const options = [
  {value:'M/Kiti',label:'M/Kiti'},
  {value:'Katibu',label:'Katibu'},
  {value:'Mhasibu',label:'Mhasibu'},
  

]
 function Opt(){
  return (
   <Select options={options} />
  );
 }
 return (
  <>{isPortraitGroup &&
 <div id="mainGroup">
   <h2 id="vicobaGroup">Register A Group</h2>
   <div id="container-group">
     <Card >
    <div id="card">
     <TextField
      fullWidth
      label="Group Name"
      margin="normal"
      size="small"
      InputLabelProps={{type:{fontSize: 15}}}
     />
     <TextField
      fullWidth
      label="Total Group Members"
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
      label="Password"
      margin="normal"
      size="small"
      InputLabelProps={{type:{fontSize: 15}}}
     />
     <TextField
      fullWidth
      label="Confirm Password"
      margin="normal"
      size="small"
      InputLabelProps={{type:{fontSize: 15}}}
     />
     <div id="opt">
       <Opt />
     </div>
   
    </div>
    <div id="butdiv">
     <button id="butreg" variant="outlined" >Register</button>
    </div>

   </Card>
  </div>
 </div> 
}</>
 )
}

export default RegisterGroup;