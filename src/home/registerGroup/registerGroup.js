import React, { useState, useRef } from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Select from 'react-select';
import './regGroup.css';
import { useMediaQuery } from 'react-responsive'
import { registerGroup } from "../../client/client";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function RegisterGroup() {
  const isPortraitGroup = useMediaQuery({ query: '(max-width: 360px)' });
  const [selectedOption, setSelectedOPtion] = useState('');
  const [Loading, setLoading] = useState('');

  const groupname = useRef('');
  const totalmembers = useRef('');
  const firstname = useRef('');
  const lastname = useRef('');
  const phoneNo = useRef('');
  const email = useRef('');
  const password = useRef('');
  const place = useRef('');
  const formref = useRef('');

  const options = [
    { value: 'M/Kiti', label: 'M/Kiti' },
    { value: 'Katibu', label: 'Katibu' },
    { value: 'Mhasibu', label: 'Mhasibu' },
  ]

  const handleSelectedOption = (select) => {
    setSelectedOPtion(select);
  }

  console.log("tessssssssssssst", place.current.value)

  async function HandleRegGroup() {

    try {
      setLoading(true)
      if (
        !groupname.current.value == '' &&
        !totalmembers.current.value == '' &&
        !firstname.current.value == '' &&
        !lastname.current.value == '' &&
        !phoneNo.current.value == '' &&
        !email.current.value == '' &&
        !password.current.value == '' &&
        !place.current.value == '' &&
        !selectedOption.value == ''
      ) {

        const response = await registerGroup({
          groupname: groupname.current.value,
          totalmembers: totalmembers.current.value,
          firstname: firstname.current.value,
          lastname: lastname.current.value,
          phoneNo: phoneNo.current.value,
          email: email.current.value,
          password: password.current.value,
          place: place.current.value,
          title: selectedOption.value
        });
        if (response) {
          setLoading(false)
          toast('Group registered!', {
            appearance: 'success',
            autoDismiss: true
          });
          window.location.replace('/login')
          return 'group registered';
        }
        setLoading(false)
        toast('did not register group!', {
          appearance: 'error'
        });
      }
      else {
        toast('Fill all the fields', { appearance: 'error' });
        setLoading(false)
        return;
      }

    }
    catch (error) {
      toast('Failed', { appearance: 'error' });
      setLoading(false)
      return;
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      HandleRegGroup();
    }
  }

  return (
    <>{isPortraitGroup &&
      <div id="mainGroup">
        <h2 id="vicobaGroup">Register A Group</h2>
        <div id="container-group">
          <Card >
            <div id="card">
              <TextField
                fullWidth
                label="Group Name"
                margin="normal"
                inputRef={groupname}
                ref={formref}
                onKeyDown={handleKeyDown}
                size="small"
                InputLabelProps={{ type: { fontSize: 15 } }}
              />
              <TextField
                fullWidth
                label="Total Group Members"
                margin="normal"
                inputRef={totalmembers}
                ref={formref}
                onKeyDown={handleKeyDown}
                size="small"
                InputLabelProps={{ type: { fontSize: 15 } }}
              />
              <TextField
                fullWidth
                label="Admin First Name"
                margin="normal"
                inputRef={firstname}
                ref={formref}
                onKeyDown={handleKeyDown}
                size="small"
                InputLabelProps={{ type: { fontSize: 15 } }}
              />
              <TextField
                fullWidth
                label="Admin Last Name"
                margin="normal"
                inputRef={lastname}
                ref={formref}
                onKeyDown={handleKeyDown}
                size="small"
                InputLabelProps={{ type: { fontSize: 15 } }}
              />
              <TextField
                fullWidth
                label="Mobile No."
                margin="normal"
                size="small"
                inputRef={phoneNo}
                ref={formref}
                onKeyDown={handleKeyDown}
                InputLabelProps={{ type: { fontSize: 15 } }}
              />
              <TextField
                fullWidth
                label="email"
                margin="normal"
                size="small"
                inputRef={email}
                ref={formref}
                onKeyDown={handleKeyDown}
                InputLabelProps={{ type: { fontSize: 15 } }}
              />
              <TextField
                fullWidth
                label="Password"
                margin="normal"
                type="password"
                inputRef={password}
                ref={formref}
                onKeyDown={handleKeyDown}
                size="small"
                InputLabelProps={{ type: { fontSize: 15 } }}
              />
              <TextField
                fullWidth
                label="Place"
                margin="normal"
                inputRef={place}
                ref={formref}
                onKeyDown={handleKeyDown}
                size="small"
                InputLabelProps={{ type: { fontSize: 15 } }}
              />
              <div id="opt">
                <Select
                  options={options}
                  value={selectedOption}
                  onChange={handleSelectedOption}
                />
              </div>

            </div>
            <div id="butdiv">
              <button id="butreg" variant="outlined" onClick={() => HandleRegGroup()} >Register</button>
              <ToastContainer />
            </div>

          </Card>
        </div>
      </div>
    }</>
  )
}

export default RegisterGroup;