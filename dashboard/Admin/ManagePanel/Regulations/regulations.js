import React from "react";
import ReactDOM from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Card from "@mui/material/Card";
import './regulations.css';
import TextField from "@mui/material/TextField";

function Regulations(){
 return (
  <>
   <Card id="area">

    {true?<div id="TextArea-wrapper">
     <div id="text">
      
      <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue=" 1.This form data from db '\n'
       2.Our group is beauty <br/>
       3.No smocking around<br/>
       4.check out we bite <br/>
       5.be care we fuck too"
        />
     </div>
      <div>
       <button>Save</button>
      </div>

    </div>
    :<div id="regu">
     <div id="head">RULES AND REGULATIONS</div>
     <span id="span">
       1.This form data from db '\n'
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