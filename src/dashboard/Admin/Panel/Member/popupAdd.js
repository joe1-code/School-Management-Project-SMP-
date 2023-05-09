import { useRef, useState } from "react";
import Dialog from "@mui/material/Dialog";
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import RegisterMember from './registerMember';
import DialogContent from "@mui/material/DialogContent";
import Select from "react-select";
import DialogActions from "@mui/material/DialogActions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerUser } from "../../../../client/client";

function PopupForm() {
  const [selectedOption, setSelectedOPtion] = useState('');
  const [Loading, setLoading] = useState('');
  const [Checked, setChecked] = useState('');
  const [Open, setOpen] = useState(false);


  // receive data from the form interface

  const fullname = useRef('');
  const phoneNo = useRef('');
  const email = useRef('');
  const password = useRef('');
  const place = useRef('');
  const title = useRef('');
  const formref = useRef('');


  const options = [
    { value: 'M/Kiti', label: 'M/Kiti' },
    { value: 'Katibu', label: 'Katibu' },
    { value: 'Mhasibu', label: 'Mhasibu' },
    { value: 'Mwanachama', label: 'Mwanachama' }

  ]
  const handleSelectedOption = (selected) => {
    setSelectedOPtion(selected);
  }

  const handleSubmit = () => {
    // event.preventDefault();
    console.log(selectedOption.value);

  }




  const handleopen = () => {
    setOpen(true);
  }

  const handleclose = () => {
    setOpen(false);
  }

  async function handle() {
    console.log("ffffffffff")
    try {
      setLoading(true);
      if (
        !fullname.current.value == '' &&
        !phoneNo.current.value == '' &&
        !email.current.value == '' &&
        !password.current.value == '' &&
        !place.current.value == '' &&
        !selectedOption.value == ''
      ) {
        console.log("ffffffffff")
        const response = await registerUser({
          fullname: fullname.current.value,
          phoneNo: phoneNo.current.value,
          email: email.current.value,
          password: password.current.value,
          place: place.current.value,
          title: selectedOption.value
        });

        if (response) {
          // formref.current.reset() to do clear form;
          setLoading(false);
          toast('user registered!', {
            appearance: 'success',
            autoDismiss: true
          });
          window.location.replace(`/panel`);
          return 'logged';
        }
        setLoading(false);
        toast('Did not register!', {
          appearance: 'error'
        });
      } else {
        toast('Fill all the fileds!', { appearance: 'error' });
        setLoading(false);
        return;
      }
    } catch (error) {
      setLoading(false);
      toast('Failed', { appearance: 'error' });
    }
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handle();
    }
  };
  function handlecheck() {
    setChecked(!Checked);
  }


  return (
    <div>
      <button variant="outlined" id="add-but" onClick={handleopen}>
        Add Member
      </button>
      <Dialog id="dialog" open={Open} onClose={handleclose} >
        <DialogTitle>Register A Member</DialogTitle>
        <div id="wraps">
          <DialogContent id="dial">
            <TextField
              fullWidth
              label="Full Name"
              margin="normal"
              size="small"
              inputRef={fullname}
              ref={formref}
              onKeyDown={handleKeyDown}
              InputLabelProps={{ type: { fontSize: 15 } }}
            />
            <TextField
              fullWidth
              label="Phone No."
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
              type="password"
              margin="normal"
              size="small"
              inputRef={password}
              ref={formref}
              onKeyDown={handleKeyDown}
              InputLabelProps={{ type: { fontSize: 15 } }}
            />
            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              margin="normal"
              size="small"
              InputLabelProps={{ type: { fontSize: 15 } }}
            />
            <TextField
              fullWidth
              label="Place"
              margin="normal"
              size="small"
              inputRef={place}
              ref={formref}
              onKeyDown={handleKeyDown}
              InputLabelProps={{ type: { fontSize: 15 } }}
            />
            <div id="memberOpt">
              <Select
                options={options}
                value={selectedOption}
                onChange={handleSelectedOption}
              />
            </div>
            <DialogActions id="reg_butdiv">
              <button id="reg_but" onClick={() => handle()}>Register</button>
              <ToastContainer />
            </DialogActions>
          </DialogContent>

        </div>
      </Dialog>
    </div>

  )
}
export default PopupForm;