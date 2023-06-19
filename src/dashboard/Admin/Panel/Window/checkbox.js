import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
function Checkboxes(data) {
  const [userID, setUserID] = useState([]);

  const handleCheck4 = () => {
    const { userid } = data.userid
    let users = userID
    // users = users.push('hello')

    // const users = userid.push()
    setUserID(userID.push(userid))
    console.log("wwwwwwwwww", userID)
  }
  const label = { inputprops: { 'arial-label': "checkbox" } };
  return (

    <Checkbox {...label} onChange={() => handleCheck4()} />
  )
}

export default Checkboxes;