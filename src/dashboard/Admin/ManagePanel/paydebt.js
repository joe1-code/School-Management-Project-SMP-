import {useState} from "react";
import Dialog from "@mui/material/Dialog";
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Card from "@mui/material/Card";
import './manage.css';

function Debt(){

 const [Open, setOpen]= useState(false);
 
 const handleopen=()=>{
  setOpen(true);
 }
 
 const handleclose=()=>{
  setOpen(false);
 }
 return (
  <div id="debt-contain">
   <div id="div-debtbut">
    <button variant="outlined" id="debt-But" onClick={handleopen}>
     Pay Debt
    </button>
   </div>
    
    <Dialog id="debt-dialog" open={Open} onClose={handleclose}>
      <DialogTitle>Pay Debt</DialogTitle>
       <div id="cover">
        <div id="debt-wraper">
         <DialogContent id="debtdial">
          <Card id="debtcard">
           <div id="debting">
            <span style={{fontSize:18,fontWeight:"bold"}}>Debt</span>
            <span style={{color:"#7B7575",fontSize:14,fontWeight:"bold"}}>10,000</span>
           </div>
           <div id="pend">
            <span style={{fontSize:18,fontWeight:"bold"}}>Pending</span>
            <span style={{color:"#7B7575",fontSize:14,fontWeight:"bold"}}>25,000</span>
           </div>
          </Card>
          <TextField
           fullWidth
           label="Amount"
           margin="normal"
           size="small"
           InputLabelProps={{type:{fontSize: 15}}}
          />
      
          <DialogActions id="debt_butdiv">
           <div id='paybutdiv'><button id="pay-but" onClick={()=>handleclose(true)}>Pay</button></div>
          </DialogActions> 
         </DialogContent>
        </div>
        
       </div>
    </Dialog>
   </div>
  
  
 )
}
export default Debt;