import React from "react";
import ReactDOM from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Card from "@mui/material/Card";
import './regulations.css';
import TextField from "@mui/material/TextField";
import Box from "@mui/system/Box";
import { useState } from "react";
import CreateIcon from '@mui/icons-material/Create';

function Regulations(){
 const [isAdmin,setIsadmin] =useState(true);
 const [showEdit,setShowedit] =useState(false);



 return (
  <>
   <Card id="area">

    {showEdit?
    <div id="TextArea-wrapper">
      <div>

       <Box
       component="form"
       sx={{
        '& .MuiTextField-root': { m: 1, width: '40ch' },
       }}
       noValidate
       autoComplete="off"
       >
       <TextField
          id="field"
          label="Rules&Regulations"
          multiline
          rows={14}
          defaultValue=""
        />
       </Box> 
       <div id="save">
        <button id="save-but" onClick={()=>setShowedit(false)}>save</button>
       </div>       
 
      </div>
      

    </div>
    
    :<div id="regu">
     <div id="edit">{isAdmin && <CreateIcon onClick={()=>setShowedit(true)}/>}</div>
     <div id="head">RULES AND REGULATIONS </div>
     <span id="span">
       1.This form data from db <br/>
       2.Our group is beauty <br/>
       3.No smocking around<br/>
       4.check out we bite <br/>
       5.be care we fuck too
    </span>
    </div>}
    
     
   
   </Card>
  
  </>
 )
}

export default Regulations;