import * as React from 'react';
import { useEffect, useState } from 'react';
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

  const [startdate, setStartdate] = useState('');
  const [receivers, setReceivers] = useState('');
  const [results, setResults] = useState('');

  useEffect(() => {
    windowShow();
  }, []);


  async function windowShow() {
    try {
      const response = await windowUsers();
      console.log("star", response)
      // destructuring startdate value from a response object
      const startdate = response.data[0].startdate;
      const receivers = response.data[0].receivers;

      //update the state using the received values
      setStartdate(startdate);
      setReceivers(receivers);

      const results = enddates(startdate, receivers);

      setResults(results);


    }

    catch (error) {
      console.log('error', error)
    }

  }


  //  calculate for an endcycle logic
  function enddates(startdate, receivers) {

    //parse the startdate
    const startdateObj = new Date(startdate);

    //calculate the enddate after a day
    const enddateDay = new Date(startdateObj.getTime() + receivers * 24 * 60 * 60 * 1000);

    // calculate the enddate after a week
    const enddateWeek = new Date(startdateObj.getTime() + (receivers * 7) * 24 * 60 * 60 * 1000);

    // calculate the enddate after a month
    const enddateMonth = new Date(startdateObj.getTime() + (receivers * 30) * 24 * 60 * 60 * 1000);

    const duration = receivers * 24 * 60 * 60 * 1000;

    if (duration <= enddateDay - startdateObj) {
      return { label: "day", value: enddateDay.toISOString() };
    }
    else if (duration <= enddateWeek - startdateObj) {
      return { label: "week:", value: enddateWeek.toISOString() };
    }
    else {
      return { label: "month", value: enddateMonth.toISOString() };
    }

  }






  function WindowData(id, startcycle, endcycle, actions) {
    return { id, startcycle: { value: startcycle.substring(0, 10) }, endcycle: endcycle && endcycle.value ? endcycle.value.split('T')[0] : 'N/A', actions };
  }


  const windowActions = (<div><VisibilityIcon /><CreateIcon /></div>);

  const rows = [

    WindowData(1, startdate, results, windowActions)
  ];



  return (
    <div style={{ overflowY: 'auto', maxHeight: '300px' }}>

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
                <TableCell component="th" scope="row">{row.startcycle.value ? row.startcycle.value : 'N/A'}</TableCell>
                <TableCell align="right">{row.endcycle ? row.endcycle : 'N/A'}</TableCell>
                <TableCell align="right">{row.actions}</TableCell>



              </TableRow>
            )
            )}
          </TableBody>
        </Table>
      </TableContainer>

    </div>
  )
}

export default WindowDataTable;