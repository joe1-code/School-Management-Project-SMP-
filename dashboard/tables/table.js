import * as React from 'react';
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";

function CreateData(id,names,lastupdate,amount,deadline){
 return {id,names,lastupdate,amount,deadline};
}


const rows=[
  CreateData(1,'Joel John','Feb 2 2022',30000,'Feb 10 2023'),
  CreateData(2,'Paul chula','May 3 2023',50000,'Dec 10 2023'),
  CreateData(3,'gido kagya','Jan 15 2020',10000,'Aug 13 2021'),
  CreateData(4,'Gilbert Shine','May 6 2021',20000,'July 14 2022'),
  CreateData(5,'Marco Bita','April 31 2020',70000,'Nov 19 2023'),
  CreateData(6,'Anna Kimba','Aug 3 2023',100000,'Oct 124 2023'),
  CreateData(7,'Amina Batul','June 30 2023',8000,'March 19 2025')
  // CreateData(8,'Abdul kashasha','June 7 2022',35000,'March 11 2029')
  
];

function DataTable(){
 return (
 <TableContainer component={Paper}>
  <Table sx={{minWidth: 500}} aria-label="simple-table">
    <TableHead>
      <TableRow>
        <TableCell style={{fontSize:16,fontWeight:"bold"}}>S/N</TableCell>
       <TableCell style={{fontSize:16,fontWeight:"bold"}}>Names</TableCell>
       <TableCell align="right" style={{fontSize:16,fontWeight:"bold"}}>LastUpdate</TableCell>
       <TableCell align="right" style={{fontSize:16,fontWeight:"bold"}}>Amount</TableCell>
       <TableCell align="right" style={{fontSize:16,fontWeight:"bold"}}>Deadline</TableCell>
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
       <TableCell align="right">{row.lastupdate}</TableCell>
       <TableCell align="right">{row.amount}</TableCell>
       <TableCell align="right">{row.deadline}</TableCell>

      </TableRow>
     )
     )}
    </TableBody>
  </Table>
 </TableContainer>

  )
}

export default DataTable;