
import * as React from 'react';
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";

function Data(id,names,phone,place,title,email){
 return {id,names,phone,place,title,email};
}


const rows=[
  Data(1,'Joel John',734121234,'manzese','m/kiti'),
  Data(2,'Paul chula',767231277,'kivukon','m/chama'),
  Data(3,'gido kagya',73412123,'kimara','katibu'),
  Data(4,'Gilbert Shine',73412123,'baruti','m/chama'),
  Data(5,'Marco Bita',73412123,'bungoni','m/chama'),
  Data(6,'Anna Kimba',73412123,'mikocheni','m/chama'),
  Data(7,'Amina Batul',73412123,'posta','m/chama')
  // CreateData(8,'Abdul kashasha','June 7 2022',35000,'March 11 2029')
  
];

function MemberTable(){
 return (
 <TableContainer component={Paper}>
  <Table sx={{minWidth: 650}} aria-label="simple-table">
    <TableHead>
      <TableRow>
        <TableCell style={{fontSize:16,fontWeight:"bold"}}>S/N</TableCell>
       <TableCell style={{fontSize:16,fontWeight:"bold"}}>Names</TableCell>
       <TableCell align="right" style={{fontSize:16,fontWeight:"bold"}}>Phone</TableCell>
       <TableCell align="right" style={{fontSize:16,fontWeight:"bold"}}>Place</TableCell>
       <TableCell align="right" style={{fontSize:16,fontWeight:"bold"}}>Title</TableCell>
       <TableCell align="right" style={{fontSize:16,fontWeight:"bold"}}>Email</TableCell>

      </TableRow>
    </TableHead>
    <TableBody>
     {rows.map((row)=>(
      <TableRow
       key={row.names}
       sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell width='10%' align='right'>{row.id}</TableCell>
       <TableCell component="th" scope="row">{row.names}</TableCell>
       <TableCell align="right">{row.phone}</TableCell>
       <TableCell align="right">{row.place}</TableCell>
       <TableCell align="right">{row.title}</TableCell>
       <TableCell align="right">{row.email}</TableCell>

      </TableRow>
     )
     )}
    </TableBody>
  </Table>
 </TableContainer>

  )
}

export default MemberTable;