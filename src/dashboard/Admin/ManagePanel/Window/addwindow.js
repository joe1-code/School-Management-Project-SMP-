import React from 'react';
import Card from "@mui/material/Card";
import { useMediaQuery } from "react-responsive";
import WindowDataTable from '../../../tables/windowTable';
import './window.css';
import Button from '@mui/material/Button';

function AddWindow(){
  const isPortraitAddwindow = useMediaQuery({ query: '(max-width: 360px)' });



 return (
 <>
  {isPortraitAddwindow && <Card>
   <Card id='windowBut-div'>
    <div id='div'><button id='window-but'>Add Window</button></div>
   </Card>
   <Card>
    <WindowDataTable />
   </Card>
  </Card>}
 </>
  
 )
}

export default AddWindow;