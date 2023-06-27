import * as React from 'react';
import { useEffect } from 'react';
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import VisibilityIcon from '@mui/icons-material/Visibility';
import CreateIcon from '@mui/icons-material/Create';
import { getUsers, windowUsers } from '../../client/client';

function WindowDataTable() {

  useEffect(() => {
    windowShow();
  }, []);

  async function windowShow() {
    const response = await windowUsers();

    if (response) {
      const datashow = response.data.map((element) => {
        const { startdate } = element;
      })
      console.log('this my response', datashow);

    }
  }







  function WindowData(id, startcycle, endcycle, actions) {
    return { id, startcycle, endcycle, actions };
  }

  const windowActions = (<div><VisibilityIcon /> <CreateIcon /></div>)
  const rows = [
    WindowData(1, 'Feb 2 2021', 'Feb 2 2022', windowActions)
  ];







  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 380 }} aria-label="simple-table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontSize: 16, fontWeight: "bold" }}>S/N</TableCell>
            <TableCell style={{ fontSize: 16, fontWeight: "bold" }}>StartCycle</TableCell>
            <TableCell align="right" style={{ fontSize: 16, fontWeight: "bold" }}>EndCycle</TableCell>
            <TableCell align="right" style={{ fontSize: 16, fontWeight: "bold" }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.startcycle}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align='right'>{row.id}</TableCell>
              <TableCell component="th" scope="row">{row.startcycle}</TableCell>
              <TableCell align="right">{row.endcycle}</TableCell>
              <TableCell align="right">{row.actions}</TableCell>



            </TableRow>
          )
          )}
        </TableBody>
      </Table>
    </TableContainer>

  )
}

export default WindowDataTable;