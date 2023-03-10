import * as React from 'react';
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import Typography from '@mui/material/Typography';
import '../../dashboard/Admin/Panel/Accountant/accountant.css';
import Approve from '../Admin/Panel/Accountant/approve';

function Account(id,names,Pending,debt,action){
 return {id,names,Pending,debt,action};
}

const act=(<div id='approvediv'><Approve /></div>);

const rows=[
 Account(1,'Ally Juma',7000,3000,act),
 Account(2,'Addul Faiza',4000,2000,act),
 Account(3,'Yohana Tajiri',5000,1000,act),
 Account(4,'Konde Boy',7004,3000,act),
 Account(5,'Diana Karume',8000,9000,act),
 Account(6,'Kaija Muga',400,7855,act),
 Account(7,'Patrick Ndizi',6000,2000,act)
  
];

function AccountTable(){
 return (
 <TableContainer component={Paper}>
  <Table sx={{minWidth: 280}} aria-label="simple-table">
    <TableHead>
     <div class='acctable'>
      <Typography style={{fontSize:18,fontWeight:"bold"}} >PENDING</Typography>
     </div>
      <TableRow>
       <TableCell style={{fontSize:16,fontWeight:"bold"}}>S/N</TableCell>
       <TableCell style={{fontSize:16,fontWeight:"bold"}}>Names</TableCell>
       <TableCell style={{fontSize:16,fontWeight:"bold"}}>Pending</TableCell>
       <TableCell style={{fontSize:16,fontWeight:"bold"}}>Debt</TableCell>
       <TableCell style={{fontSize:16,fontWeight:"bold"}}>Action</TableCell>

      </TableRow>
    </TableHead>
    <TableBody>
     {rows.map((row)=>(
      <TableRow
       key={row.names}
       sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell align='right'>{row.id}</TableCell>
       <TableCell component="th" scope="row">{row.names}</TableCell>
       <TableCell align="right">{row.Pending}</TableCell>
       <TableCell align="right">{row.debt}</TableCell>
       <TableCell align="right">{row.action}</TableCell>
      </TableRow>
     )
     )}
    </TableBody>
  </Table>
 </TableContainer>

  )
}

export default AccountTable;