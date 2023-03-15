import React from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Select from 'react-select';
 // import AddwindowTable from "../../../tables/addwindowTable";
import NewwindowTable from "../../../tables/newwindowtable";
// import Demo from "../../../tables/newwindowtable";
import { Virtuoso } from 'react-virtuoso'
import { width } from "@mui/system";


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
     <div id="startdate">
      <TextField
      label="Start Date"
      margin="normal"
      size="small"
      InputLabelProps={{type:{fontSize: 15}}}
     />
     </div>
     <div id="amount">
      <TextField
       label="Pay Amount"
       margin="normal"
       size="small"
       InputLabelProps={{type:{fontSize: 15}}}
     />
     </div>
     
    </div>
    <div id="cont2">
     <div id="windopt"><WindowOpt /></div>
     <div id="receive">
      <TextField
       label="Receiving People"
       margin="normal"
       size="small"
       InputLabelProps={{type:{fontSize: 15}}}
     />
     </div>
     
    </div>
    <div id="cont3">
     <div id="custom"><WindowCustomed/></div>
     <div id="receiveamount">
      <TextField
       label="Amount"
       margin="normal"
       size="small"
       InputLabelProps={{type:{fontSize: 15}}}
      />
     </div>
     
    </div>
     <div id="newaddwind"><NewwindowTable/></div>
     <div id="windowsbut"><button id="wind_but">Save</button></div>
   </div>
 </Card>
  )
}
export default Newwindow;