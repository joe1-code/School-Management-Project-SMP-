import React from "react";
import ReactDOM from "react";
import Card from "@mui/material/Card";
import './members.css';
import MemberTable from "../../../tables/memberTable";
import PopupForm from "./popupAdd";
function Member(){

 return (
  <div class="wrapper">
   <Card id="add-wrap">
     {/* <button id="add-but">Add Member</button> */}
     <PopupForm />
   </Card>
   <Card id="membertable">
    <MemberTable />
   </Card>
  </div>
 )
}
export default Member;