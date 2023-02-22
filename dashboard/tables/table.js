import React from "react";
import ReactDOM from "react";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";


function CreateData(names,lastupdate,amount,deadline){
 return (names,lastupdate,amount,deadline);
}


const rows=[
  CreateData('Joel John','Feb 2 2022',30000,'Feb 10 2023'),
  CreateData('Paul chula','May 3 2023',50000,'Dec 10 2023'),
  CreateData('gido kagya','Jan 15 2020',10000,'Aug 13 2021'),
  CreateData('Gilbert Shine','May 6 2021',20000,'July 14 2022'),
  CreateData('Marco Bita','April 31 2020',70000,'Nov 19 2023'),
  CreateData('Anna Kimba','Aug 3 2023',100000,'Oct 124 2023'),
  CreateData('Amina Batul','June 30 2023',8000,'March 19 2025'),
  
];

function DataTable(){
 <TableContainer>
  <Table sx={{minWidth: 650}} aria-label="simple-table">
    <TableHead>
      <TableRow>
       <TableCell>Names</TableCell>
       <TableCell align="right">LastUpdate</TableCell>
       <TableCell align="right">Amount</TableCell>
       <TableCell align="right">Deadline</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
     
    </TableBody>
  </Table>
 </TableContainer>
}

export default DataTable;