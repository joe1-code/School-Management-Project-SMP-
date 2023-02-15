import React from "react";
import ReactDOM from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Select from "react-select";
import './regMember.css';

function RegisterMember(){
 const options = [
  {value:'M/Kiti',label:'M/Kiti'},
  {value:'Katibu',label:'Katibu'},
  {value:'Mhasibu',label:'Mhasibu'},
  {value:'Mwanachama',label:'Mwanachama'}

]
 function MemberOpt(){
  return (
   <Select options={options} />
  );
 }
 return (
  <div id="Main-member">
   <Card id="card-member">
    <div id="container-member">
     <TextField
      fullWidth
      label="Full Name"
      margin="normal"
      size="small"
      InputLabelProps={{type:{fontSize: 15}}}
     />
     <TextField
      fullWidth
      label="Phone No."
      margin="normal"
      size="small"
      InputLabelProps={{type:{fontSize: 15}}}
     />
     <TextField
      fullWidth
      label="Place"
      margin="normal"
      size="small"
      InputLabelProps={{type:{fontSize: 15}}}
     />
     <div id="MemberOpt">
      <MemberOpt />
     </div>
    </div>
    <div id="butdiv-member">
     <button id="butreg" variant="outlined" >Register</button>
    </div>
   </Card>
  </div>
 )
}

export default RegisterMember;