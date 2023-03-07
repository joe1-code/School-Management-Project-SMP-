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
  {isPortraitAddwindow && <div id='container'> <Card id='wrap'>
   <div id='wrap-div'>
    <Card id='windowBut-div'>
     <div id='div'><button id='window-but' variant='outlined'>Add Window</button></div>
    </Card>
    <Card>
     <WindowDataTable />
    </Card>
   </div>
  </Card></div>}
 </>
  
 )
}

export default AddWindow;