import {useState} from "react";
import Dialog from "@mui/material/Dialog";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import RegisterMember from './registerMember';

function PopupForm(){
 const [Open, setOpen]= useState(false);
 
 const handleopen=()=>{
  setOpen(true);
 }
 
 const handleclose=()=>{
  setOpen(false);
 }
 return (
  <>
  <Button variant="outlined" onClick={handleopen}>
    Add Member
  </Button>
  <Dialog open={Open} onClose={handleclose}>
   <DialogTitle>Add Member</DialogTitle>
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
  </Dialog>
  </>
  
 )
}
export default PopupForm;