import React, { useRef, useState } from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Reset() {
  const [Loading, setLoading] = useState('');

  const { phoneNo } = useSelector((state) => state.store.initialStore);

  console.log(phoneNo)
  const userCode = useRef('');
  const password = useRef('');
  const confirmpass = useRef('');

  async function resetpassword() {
    setLoading(true)

    try {
      if (
        !userCode.current.value == '' &&
        !password.current.value == ''

      ) {
        const response = await postCode({
          userCode: userCode.current.value,
          password: password.current.value
        })
      }
    }
    catch (error) {
      //lll
    }
  }









  return (

    <>
      <div id="resetdiv" style={{ color: "#7B7575" }}><h3>Reset your password</h3></div>
      <Card id="resetCard">
        <div id="resetField">
          <TextField
            fullWidth
            id="code"
            label="Code"
            type="number"
            autoComplete="current-password"
            variant="filled"
          />
          <TextField
            fullWidth
            InputLabelProps={{ style: { fontSize: 15 } }}
            size="small"
            id="resetpass"
            type="password"
            label="New Password"
            margin="normal"
          />
          <TextField
            fullWidth
            InputLabelProps={{ style: { fontSize: 15 } }}
            size="small"
            id="resetpass"
            label="Repeat Password"
            type="password"
            margin="normal"
          />
        </div>

        <div id="updatediv"><button id="update" onClick={() => Reset()}>Update</button>
          <ToastContainer />
        </div>

      </Card>

    </>
  )
}


export default Reset;





