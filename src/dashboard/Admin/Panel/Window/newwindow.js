import React, { useState, useRef } from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Select from 'react-select';
import { useDispatch, useSelector } from "react-redux";
import NewwindowTable from "../../../tables/newwindowtable";
import { reducerf } from "../../../../store";
import { registerNewwindow } from "../../../../client/client";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";




function Newwindow() {
  const [Customization, setCustomization] = useState(false);
  const navigation = useNavigate();
  const { windowMembers } = useSelector((state) => state.store.initialStore);
  const [Loading, setLoading] = useState('');
  const [selectedOption, setSelectedOPtion] = useState('');

  const startdate = useRef('');
  const payamount = useRef('');
  const durationOne = useRef('');
  const receivingpeople = useRef('');
  const total = 0;
  const durationTwo = "";
  const participators = windowMembers;
  const formref = useRef('');

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

  const HandleSelectedOption = (select) => {
    setSelectedOPtion(select);
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

  async function HandleNewwindow() {
    try {
      setLoading(true)


      if (
        !startdate.current.value == '' &&
        !payamount.current.value == '' &&
        !selectedOption.value == '' &&
        !receivingpeople.current.value == ''
        // !total.current.value == '' &&
        // !durationTwo.current.value == '' &&
      ) {

        const response = await registerNewwindow({
          startdate: startdate.current.value,
          payamount: payamount.current.value,
          durationOne: selectedOption.value,
          receivingpeople: receivingpeople.current.value,
          total: total,
          durationTwo: durationTwo,
          participators: windowMembers

        });
        console.log("The response", response)

        if (response) {
          setLoading(false)
          toast("new window registered", {
            appearance: 'success',
            autoDismiss: true
          });
          navigation('/dashboard');
          return 'window registered!';

        }
        setLoading(false)
        toast("did not register!", {
          appearance: 'error'
        });

      }
      else {
        toast("Fill all data", {
          appearance: 'error'
        });
        setLoading(false);
        return
      }
    }
    catch (error) {
      toast("Failed", { appearance: 'error' });
      setLoading(false);
      return
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      HandleNewwindow();
    }
  }

  return (
    <Card>

      <div id="wincont">
        <div id="cont1">
          <div id="startdate">
            <TextField
              type="Date"
              margin="normal"
              inputRef={startdate}
              ref={formref}
              onKeyDown={handleKeyDown}
              size="small"
              InputLabelProps={{ type: { fontSize: 15 } }}
            />
          </div>
          <div id="amount">
            <TextField
              label="Pay Amount"
              margin="normal"
              inputRef={payamount}
              ref={formref}
              onKeyDown={handleKeyDown}
              size="small"
              InputLabelProps={{ type: { fontSize: 15 } }}
            />
          </div>

        </div>
        <div id="cont2">
          <div id="windopt">
            <Select
              options={options}
              value={selectedOption}
              onChange={HandleSelectedOption}
            // onChange={handlechange}

            />
          </div>
          <div id="receive">
            <TextField
              label="Receiving People"
              margin="normal"
              inputRef={receivingpeople}
              ref={formref}
              onKeyDown={handleKeyDown}
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
              inputRef={total}
              ref={formref}
              onKeyDown={handleKeyDown}
              size="small"
              InputLabelProps={{ type: { fontSize: 15 } }}
            />
            <div id="custom">
              <WindowCustomed id='windselect2' />

            </div>
          </div>

        </div>}
        <div id="newaddwind"><NewwindowTable /></div>

      </div>
      <div id="windowsbut">
        <button id="wind_but" onClick={() => { HandleNewwindow() }}>Save</button>
        <ToastContainer />
      </div>
    </Card>
  )
}
export default Newwindow;