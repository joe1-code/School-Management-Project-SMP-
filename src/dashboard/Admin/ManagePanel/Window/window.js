import {useState} from "react";
import Dialog from "@mui/material/Dialog";
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import AddwindowTable from "../../../tables/addwindowTable";
import Card from "@mui/material/Card";
import './window.css';

function PopupWindow(){

 const [Open, setOpen]= useState(false);
 
 const handleopen=()=>{
  setOpen(true);
 }
 
 const handleclose=()=>{
  setOpen(false);
 }
 return (
  <div id="contain">
   <div id="div-but">
    <button variant="outlined" id="window-but" onClick={handleopen}>
     Add Window
    </button>
   </div>
    
    <Dialog id="dialogs" open={Open} onClose={handleclose}>
      <DialogTitle>Add New Window</DialogTitle>
      <div id="window-wraper">
       <DialogContent id="windowdial">
         <TextField
           fullWidth
           label="Start Date"
           margin="normal"
           size="small"
           InputLabelProps={{type:{fontSize: 15}}}
          />
          <TextField
           fullWidth
           label="Amount"
           margin="normal"
           size="small"
           InputLabelProps={{type:{fontSize: 15}}}
          />
          <div id="addwind">
           <AddwindowTable/>
          </div>
          <DialogActions id="wind_butdiv">
           <button id="wind_but" onClick={()=>handleclose(true)}>Save</button>
          </DialogActions> 
        </DialogContent>
        
      </div>
    </Dialog>
  </div>
  
 )
}
export default PopupWindow;