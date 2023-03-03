import {useState} from "react";
import Dialog from "@mui/material/Dialog";
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import RegisterMember from './registerMember';
import DialogContent from "@mui/material/DialogContent";
import Select from "react-select";
import DialogActions from "@mui/material/DialogActions";

function PopupForm(){
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

 const [Open, setOpen]= useState(false);
 
 const handleopen=()=>{
  setOpen(true);
 }
 
 const handleclose=()=>{
  setOpen(false);
 }
 return (
  <div>
    <button variant="outlined" id="add-but" onClick={handleopen}>
     Add Member
    </button>
    <Dialog id="dialog" open={Open} onClose={handleclose}>
      <DialogTitle>Register A Member</DialogTitle>
      <div id="wraps">
       <DialogContent id="dial">
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
           label="Email"
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
          <div id="memberOpt">
            <MemberOpt/>
          </div>
          <DialogActions id="reg_butdiv">
           <button id="reg_but" onClick={()=>handleclose(true)}>Register</button>
          </DialogActions> 
        </DialogContent>
        
      </div>
    </Dialog>
  </div>
  
 )
}
export default PopupForm;