import React from "react";
import ReactDOM from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Select from "react-select";
import './regMember.css';
import { useMediaQuery } from "react-responsive";
function RegisterMember(){
  const isPortraitMember= useMediaQuery({ query: '(max-width: 360px)' });
 
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
  <>{isPortraitMember && <div id="Main-member">
    <div id="vicobamember"><h2>Register A Member</h2></div>
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
     <button id="butreg-member" variant="outlined" >Register</button>
    </div>
   </Card>
  </div>}
  </>
 )
}

export default RegisterMember;