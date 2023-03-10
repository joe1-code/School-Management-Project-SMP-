import React from "react";
import * as react from 'react';
import Slide from "@mui/material/Slide";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import { forwardRef } from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";

const Transition=forwardRef(function Transition(props,Ref){
  return (<Slide direction="down" ref={Ref} {...props}/>);
 })
 
function Approve(){
 const [Open, setOpen]=React.useState(false);
 
 function handleOpen(){
  setOpen(true);
 }

 function handleClose(){
  setOpen(false);
 }

 return (
  <>
 <button id="approve" variant="outlined" onClick={handleOpen}>
  Approve
 </button>
 <Dialog
  open={Open}
  TransitionComponent={Transition}
  keepMounted
  onClose={handleClose}
  aria-describedby="alert-dialog-slide-description"
 >
  <DialogTitle>{"Pending Payments."}</DialogTitle>
  <DialogContent>
   <DialogContentText id="alert-dialog-slide-description">
    Please approve the pending transactions.
   </DialogContentText>
  </DialogContent>
  <DialogActions>
   <Button onClick={handleClose}>Approve</Button>
   <Button onClick={handleClose}>Reject</Button>
  </DialogActions>
 </Dialog>
 </>
  )
}
export default Approve;
