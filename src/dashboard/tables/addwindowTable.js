import * as React from 'react';
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import Typography from '@mui/material/Typography';
import '../Admin/Panel/Window/window.css';
import Checkboxes from '../Admin/Panel/Window/checkbox';

function AddwindowData(id,names,participate){
 return {id,names,participate};
}
const checks=(<Checkboxes/>);

const rows=[
 AddwindowData(1,'Ally Juma',checks),
 AddwindowData(2,'Addul Faiza',checks),
 AddwindowData(3,'Yohana Tajiri',checks),
 AddwindowData(4,'Konde Boy',checks),
 AddwindowData(5,'Diana Karume',checks),
 AddwindowData(6,'Kaija Muga',checks),
 AddwindowData(7,'Patrick Ndizi',checks)
  
];

function AddwindowTable(){
 return (
 <TableContainer component={Paper}>
  <Table sx={{minWidth: 280}} aria-label="simple-table">
    <TableHead>
     <div id='tabletitle' >
      <Typography style={{fontSize:18,fontWeight:"bold"}} >Members</Typography>
     </div>
      <TableRow>
       <TableCell style={{fontSize:16,fontWeight:"bold"}}>S/N</TableCell>
       <TableCell style={{fontSize:16,fontWeight:"bold"}}>Names</TableCell>
       <TableCell align="right" style={{fontSize:16,fontWeight:"bold"}}>Participate</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
     {rows.map((row)=>(
      <TableRow
       key={row.startcycle}
       sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell align='right'>{row.id}</TableCell>
       <TableCell component="th" scope="row">{row.names}</TableCell>
       <TableCell align="right">{row.participate}</TableCell>
      </TableRow>
     )
     )}
    </TableBody>
  </Table>
 </TableContainer>

  )
}

export default AddwindowTable;