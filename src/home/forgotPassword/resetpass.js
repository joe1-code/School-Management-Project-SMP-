import React, { useRef, useState } from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import { PHONENO_POST_CODE, PHONENO_POST_CODE_CLEAR } from '../../actions'
import { connect } from 'react-redux';

function Reset({ dispatch, phoneNo }) {
  const [Loading, setLoading] = useState('');

  console.log(phoneNo)

  const userCode = useRef('');

  dispatch({ type: PHONENO_POST_CODE_CLEAR });


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

        <div id="updatediv"><button id="update">Update</button></div>
      </Card>
    </>
  )
}

const MapStateToprops = (store) => {
  return { ...store };
};
export default connect(MapStateToprops)(Reset);





