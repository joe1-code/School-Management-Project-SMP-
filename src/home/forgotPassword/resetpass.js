import React, { useRef, useState } from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postCode } from "../../client/client";
import { useNavigate } from "react-router-dom";

function Reset() {
  const [Loading, setLoading] = useState('');
  const navigate = useNavigate();

  const { phoneNo } = useSelector((state) => state.store.initialStore);

  const userCode = useRef('');
  const password = useRef('');
  const confirmpass = useRef('');
  const formref = useRef('');

  async function resetpassword() {
    setLoading(true)

    try {
      if (
        !userCode.current.value == '' &&
        !password.current.value == ''
      ) {
        const response = await postCode({
          userCode: userCode.current.value,
          password: password.current.value,
          phoneNo: phoneNo
        });

        if (response) {
          setLoading(false)
          toast("your password has been updated successfully!", {
            appearance: 'success',
            autoDismiss: true
          });
          navigate("../login/login")
          return 'succcess'


        }
        setLoading(false)
        toast("password has not been updated", {
          appearance: 'error'
        })
      }
      else {
        setLoading(false)
        toast("fill all the fields!", {
          appearance: 'error'
        })

        return;
      }
    }
    catch (error) {
      setLoading(false)
      toast("Failed", {
        appearance: error
      });

      return;
    }
  }

  const handleKeyDown = (event) => {
    if (event.key == 'Enter') {
      resetpassword();
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
            inputRef={userCode}
            ref={formref}
            onKeyDown={handleKeyDown}
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
            inputRef={password}
            ref={formref}
            onKeyDown={handleKeyDown}
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

        <div id="updatediv"><button id="update" onClick={() => resetpassword()}>Update</button>
          <ToastContainer />
        </div>

      </Card>

    </>
  )
}


export default Reset;





