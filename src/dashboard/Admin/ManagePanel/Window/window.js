import {useState} from "react";
import Dialog from "@mui/material/Dialog";
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import AddwindowTable from "../../../tables/addwindowTable";
import Card from "@mui/material/Card";

function PopupWindow(){

 const [Open, setOpen]= useState(false);
 
 const handleopen=()=>{
  setOpen(true);
 }
 
 const handleclose=()=>{
  setOpen(false);
 }
 return (
  <div>
   <div id="div">
    <button variant="outlined" id="window-but" onClick={handleopen}>
     Add Window
    </button>
   </div>
    
    <Dialog id="dialog" open={Open} onClose={handleclose}>
      <DialogTitle>Add New Window</DialogTitle>
      <div id="wraps">
       <DialogContent id="dial">
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
          <div id="">
           <Card><AddwindowTable/></Card>
          </div>
          <DialogActions id="reg_butdiv">
           <button id="window_but" onClick={()=>handleclose(true)}>Save</button>
          </DialogActions> 
        </DialogContent>
        
      </div>
    </Dialog>
  </div>
  
 )
}
export default PopupWindow;