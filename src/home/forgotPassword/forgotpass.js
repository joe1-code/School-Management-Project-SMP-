import React, { useRef, useState } from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import './forgotpass.css';
import { useNavigate } from "react-router-dom";
import { getCode } from "../../client/client";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { reducerf } from "../../store";
import { useSelector } from "react-redux";


function Passcode() {
  const [Loading, setLoading] = useState('');
  const dispatch = useDispatch();
  const phoneNo = useRef('');
  const formref = useRef('');
  const navigate = useNavigate();



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
          setLoading(false)
          toast("The code was sent", {
            appearance: 'success',
            autoDismiss: true
          });
          dispatch(reducerf({ phoneNo: phoneNo.current.value }));
          navigate('/resetpassword');
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