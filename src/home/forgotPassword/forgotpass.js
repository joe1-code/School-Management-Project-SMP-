import React, { useRef, useState } from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import './forgotpass.css';
import { useNavigate } from "react-router-dom";
import { getCode } from "../../client/client";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Passcode() {
  const navigation = useNavigate();
  function navigate(url) {
    navigation(url)
  }

  const [Loading, setLoading] = useState('');

  const phoneNo = useRef('');
  const formref = useRef('');

  async function forgotPass() {

    try {
      setLoading(true);

      if (
        !phoneNo.current.value == ''
      ) {

        const code = await getCode({
          phoneNo: phoneNo.current.value
        });

        if (code.isSuccessful) {
          console.log("ddddd", code)
          setLoading(false)
          toast("The code was sent", {
            appearance: 'success',
            autoDismiss: true
          });

          // window.location.replace('/resetpassword');
          return 'success';
        }
        setLoading(false)
        toast('not a user', {
          appearance: 'error'
        });
      }
      else {
        setLoading(false)
        toast('fill the field please!', {
          appearance: 'error'
        });
        return;
      }

    }
    catch (error) {
      setLoading(false)
      toast('Failed', {
        appearance: 'error'
      })
      return;
    }
  }

  const handleKeyDown = (event) => {
    if (event.key == 'Enter')
      forgotPass();
  }

  return (
    <>
      <div id="forgottitle" style={{ color: "#7B7575" }}><h3>Password recovery</h3></div>
      <Card id="forgot-wrap">
        <div id="forgotdiv">
          <TextField
            label="Phone No."
            fullWidth
            InputLabelProps={{ style: { fontSize: 15 } }}
            size="small"
            inputRef={phoneNo}
            ref={formref}
            onKeyDown={handleKeyDown}
            id="forgot"
            margin="normal"
          />
        </div>

        {/* <button id="forgotbut" onClick={() => navigate("/resetpassword")}>Submit</button> */}
        <button id="forgotbut" onClick={() => forgotPass()}>Submit</button>
        <ToastContainer />
      </Card>
    </>
  )
}

export default Passcode;