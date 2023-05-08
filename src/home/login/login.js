import React, { useRef, useState } from "react";
import './login.css';
// import "../header/header";
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Link from "@mui/material/Link";
import { useMediaQuery } from 'react-responsive'
import { useNavigate } from "react-router-dom";
import { login } from "../../client/client";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login() {
  //const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  //const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(max-width: 360px)' })
  //const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  // const { addToast } = toast();
  const [Loading, setLoading] = useState('');
  const [Checked, setChecked] = useState('');

  const phoneNo = useRef('');
  const password = useRef('')
  const formref = useRef()

  async function datahandle() {

    try {

      setLoading(true);
      if (!phoneNo.current.value == '' && !password.current.value == '') {

        const response = await login({
          phoneNo: phoneNo.current.value,
          password: password.current.value
        })
        if (response) {
          setLoading(false);
          toast('Welcome!', {
            appearance: 'success',
            autoDismiss: true
          });

          window.location.replace('/dashboard');
          return ('logged In');

        }
        else {
          setLoading(false);
          toast('Wrong credentials, try again please!', { appearance: 'error' });

        }

      }
      else {
        console.log("ssssssssqqqqqqqqqqqq")
        toast('Fill all the fields correctly!', {
          appearance: 'error'
        })

      }




    }

    catch (error) {
      setLoading(false);
      toast('Failed', {
        appearance: 'error'
      })
    }

  }
  function HandleKeyDown(event) {
    if (event.key === 'Enter') {
      datahandle();
    }
  }

  function handleCheck() {
    setChecked(!Checked)
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
            onKeyDown={HandleKeyDown}

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
            onKeyDown={HandleKeyDown}
            fullWidth
          />
        </div>

        <div id="wrap">
          <button variant="outlined" id="butlog" onClick={() => datahandle()} >Login</button>
          <ToastContainer />
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