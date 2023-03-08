import * as React from 'react';
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import VisibilityIcon from '@mui/icons-material/Visibility';
import CreateIcon from '@mui/icons-material/Create';
import Typography from '@mui/material/Typography';



function AddwindowData(id,names,participate){
 return {id,names,participate};
}

const rows=[
 AddwindowData(1,'Ally Juma'),
 AddwindowData(2,'Addul Faiza'),
 AddwindowData(3,'Yohana Tajiri'),
 AddwindowData(4,'Konde Boy'),
 AddwindowData(5,'Diana Karume'),
 AddwindowData(6,'Kaija Muga'),
 AddwindowData(7,'Patrick Ndizi')
  
];

function AddwindowTable(){
 return (
 <TableContainer component={Paper}>
  <Table sx={{minWidth: 250}} aria-label="simple-table">
    <TableHead>
     <div style={{background:"green",display:"flex",alignItems:"center"}}>
      <Typography >Members</Typography>
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