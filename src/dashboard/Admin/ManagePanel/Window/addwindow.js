import React from 'react';
import Card from "@mui/material/Card";
import { useMediaQuery } from "react-responsive";
import WindowDataTable from '../../../tables/windowTable';
import './window.css';
import Button from '@mui/material/Button';
import PopupWindow from './window';


function AddWindow(){
  const isPortraitAddwindow = useMediaQuery({ query: '(max-width: 360px)' });

 return (
 <>
   {isPortraitAddwindow && <div id='container'>
   <div id='wrap-div'>
    <Card id='windowBut-div'>
     {/* <div id='div'><button id='window-but' variant='outlined'>Add Window</button></div> */}
     <div id='div'><PopupWindow/></div>
    </Card>
    <Card>
     <WindowDataTable />
    </Card>
   </div>
   </div>}
 </>
  
 )
}

export default AddWindow;