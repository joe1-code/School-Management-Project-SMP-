import React, { useState } from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Select from 'react-select';
import { useDispatch, useSelector } from "react-redux";
import NewwindowTable from "../../../tables/newwindowtable";
import { duration } from "@mui/material";
import { reducerf } from "../../../../store";


function Newwindow() {
  const [Customization, setCustomization] = useState(false);
  const { windowMembers } = useSelector((state) => state);
  console.log("hoooooooooooooyaaaaa", windowMembers)

  const options = [
    { value: 'daily', label: 'Daily' },
    { value: 'daily', label: 'Weekly' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'custom', label: 'Custom' }
  ]
  const customed = [
    { value: 'time', label: 'Days' },
    { value: 'time', label: 'Weeks' },
    { value: 'time', label: 'Months' }
  ]
  const handlechange = (event) => {
    console.log('hhsdsdsds', event.value)
    if (event.value == 'custom') { setCustomization(true) }
    else { setCustomization(false); }



  }

  function WindowOpt() {
    return (
      <Select options={options} onChange={handlechange} />
    );
  }

  function WindowCustomed() {
    return (
      <Select options={customed} />
    );
  }

  return (
    <Card>

      <div id="wincont">
        <div id="cont1">
          <div id="startdate">
            <TextField
              label="Start Date"
              margin="normal"
              size="small"
              InputLabelProps={{ type: { fontSize: 15 } }}
            />
          </div>
          <div id="amount">
            <TextField
              label="Pay Amount"
              margin="normal"
              size="small"
              InputLabelProps={{ type: { fontSize: 15 } }}
            />
          </div>

        </div>
        <div id="cont2">
          <div id="windopt"><WindowOpt /></div>
          <div id="receive">
            <TextField
              label="Receiving People"
              margin="normal"
              size="small"
              InputLabelProps={{ type: { fontSize: 15 } }}
            />
          </div>

        </div>
        {Customization && <div id="cont3">
          <div id="receiveamount">
            <TextField
              label="Total"
              margin="normal"
              size="small"
              InputLabelProps={{ type: { fontSize: 15 } }}
            />
            <div id="custom"><WindowCustomed id='windselect2' /></div>
          </div>

        </div>}
        <div id="newaddwind"><NewwindowTable /></div>
        <div id="windowsbut"><button id="wind_but">Save</button></div>
      </div>
    </Card>
  )
}
export default Newwindow;