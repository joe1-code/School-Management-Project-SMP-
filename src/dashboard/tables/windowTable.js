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
    try {
      const response = await windowUsers();

      // destructuring startdate value from a response object
      const startdate = response.data[0].startdate;
      const receivers = response.data[0].receivers;
      console.log("this is receivers", receivers)
      console.log('this is startdate', startdate);

      const enddateResults = enddates(startdate, receivers);
      console.log("this is end date:", enddateResults);


    }

    catch (error) {
      console.log('error', error)
    }

  }



  //  calculate for an endcycle logic
  function enddates(startdate, receivers) {
    console.log("testssssssssss")
    //parse the startdate
    const startdateObj = new Date(startdate);

    //calculate the enddate after a day
    const enddateDay = new Date(startdateObj.getTime() + receivers * 24 * 60 * 60 * 1000);
    console.log('this is enddateday', enddateDay);


    // calculate the enddate after a week
    const enddateWeek = new Date(startdateObj.getTime() + (receivers * 7) * 24 * 60 * 60 * 1000);

    // calculate the enddate after a month
    const enddateMonth = new Date(startdateObj.getTime() + (receivers * 30) * 24 * 60 * 60 * 1000);

    return {
      enddateDay: enddateDay,
      enddateWeek: enddateWeek,
      enddateMonth: enddateMonth
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