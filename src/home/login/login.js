import React, { useRef, useState } from "react";
import './login.css';
// import "../header/header";
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Link from "@mui/material/Link";
import { useMediaQuery } from 'react-responsive'
import { useNavigate } from "react-router-dom";
import { login } from "../../client/client";
import toast, { Toaster } from 'react-hot-toast';

function Login() {
  //const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  //const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(max-width: 360px)' })
  //const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  const { addToast } = toast();
  const [Loading, setLoading] = useState('');
  const [Checking, setChecking] = useState('');

  const phoneNo = useRef('');
  const password = useRef('')
  const formref = useRef()

  async function datahandle() {
    console.log("ssssssss", phoneNo.current.value, password.current.value)
    try {
      setLoading(true);
      if (!phoneNo.current.value == '' && password.current.value == '') {
        const response = await login({
          phoneNo: phoneNo.current.value,
          password: password.current.value
        })
        console.log(phoneNo);
        if (response) {

        }
      }
    }
    catch (error) {
      toast("No inputs")
    }
  }


  return (
    <div id="main">
      <h2 id="vicoba">Sign In to Vicoba App</h2>
      {isPortrait && <Card id="container-mobile">
        <div id="wrapper">
          <TextField
            fullWidth
            InputLabelProps={{ style: { fontSize: 15 } }}
            size="small"
            id="user"
            label="Username"
            inputRef={phoneNo}
            margin="normal"
            ref={formref}

          />
          <TextField
            InputLabelProps={{ style: { fontSize: 15 } }}
            size="small"
            id="pass"
            label="Password"
            inputRef={password}
            type="password"
            variant="outlined"
            margin="normal"
            ref={formref}
            fullWidth
          />
        </div>

        <div id="wrap">
          <button variant="outlined" id="butlog" onClick={() => datahandle()} >Login</button>
        </div>
        <h4 id="links">
          <Link href="/forgotpassword" style={{ color: "blue" }}>Forgot Password?</Link>
          <Link href="/registerGroup" style={{ color: "blue" }}>Create a new group?</Link>
        </h4>




      </Card>}

    </div>
  )




}

export default Login;