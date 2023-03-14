import React from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Select from 'react-select';

function Newwindow(){
 const options = [
  {value:'Daily',label:'Daily'},
  {value:'Weekly',label:'Weekly'},
  {value:'Monthly',label:'Monthly'},
   {value:'Custom',label:'Custom'}
]
const customed=[
 {value:'Days',label:'Days'},
 {value:'Weeks',label:'Weeks'},
 {value:'Months',label:'Months'}
]
 function WindowOpt(){
  return (
   <Select options={options} />
  );
 }

 function WindowCustomed(){
  return(
   <Select options={customed}/>
  );
 }
 return (
 <Card>
   <div id="wincont">
    <div id="cont1">
     <TextField
      label="Start Date"
      margin="normal"
      size="small"
      InputLabelProps={{type:{fontSize: 15}}}
     />
     <TextField
      label="Amount"
      margin="normal"
      size="small"
      InputLabelProps={{type:{fontSize: 15}}}
     />
    </div>
    <div>
     <WindowOpt/>
     <TextField
      fullWidth
      label="Receiving People"
      margin="normal"
      size="small"
      InputLabelProps={{type:{fontSize: 15}}}
     />
    </div>
    <div>
     <TextField
      fullWidth
      label="Amount"
      margin="normal"
      size="small"
      InputLabelProps={{type:{fontSize: 15}}}
     />
     <WindowCustomed/>
    </div>

   </div>
 </Card>
  )
}
export default Newwindow;