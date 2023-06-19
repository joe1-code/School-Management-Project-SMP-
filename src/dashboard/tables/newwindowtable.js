import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso } from 'react-virtuoso';
import Checkboxes from '../Admin/Panel/Window/checkbox';
import { getUsers } from '../../client/client';
import { useEffect } from 'react';
import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';


// const checks = (<Checkboxes />);

function NewwindowTable() {
  const label = { inputprops: { 'arial-label': "checkbox" } };
  const [users, setUsers] = useState([]);
  const [userID, setUserID] = useState([]);

  let addUser = []

  useEffect(() => {
    fetchdata();
  }, []);

  const handleCheck4 = (data, e) => {

    const { userid } = data;


    if (e.target.checked) {

      // users = users.push('hello')
      // console.log('jjjjjjjjjjjj', e.target.checked)
      addUser.push(userid);
      console.log("hhhhhhhhaaa", addUser);
    }
    else {
      addUser = addUser.filter((element) => element !== userid)
      console.log("remooooooove", addUser)
    }




  }

  async function fetchdata() {
    const data = await getUsers();
    if (data) {
      const members = data.data.map((item) => {
        const { fullname, userid } = item;


        console.log(userid)
        return [fullname, <Checkbox {...label} onChange={(e) => handleCheck4(item, e)} />
        ];
      })
      console.log(members)

      setUsers(members)
    }
    else {
      console.log("no data")
    }

  }

  // ---------------------------------------------------------------------


  function createData(id, names, participate) {
    return { id, names, participate };
  }

  const columns = [
    {
      width: 10,
      label: 'S/N',
      dataKey: 'id',
      numeric: true
    },
    {
      width: 10,
      label: 'Names',
      dataKey: 'names',
    },
    {
      width: 10,
      label: 'Participate',
      dataKey: 'participate',
    }
  ];

  // const rows = Array.from({ length: 5 }, (_, index) => {
  //   const randomSelection = users[Math.floor(Math.random() * users.length)];
  //   return createData(index, ...randomSelection);
  // });

  const rows = [];
  for (let i = 0; i < users.length; i++) {
    const userData = users[i]
    const rowData = createData(i, ...userData)
    rows.push(rowData)
  }

  const VirtuosoTableComponents = {
    Scroller: React.forwardRef((props, ref) => (
      <TableContainer component={Paper} {...props} ref={ref} />
    )),
    Table: (props) => (
      <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
    ),
    TableHead,
    TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
    TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
  };

  function fixedHeaderContent() {
    return (
      <TableRow>
        {columns.map((column) => (

          <TableCell
            key={column.dataKey}
            variant="head"
            align={column.numeric || false ? 'right' : 'left'}
            style={{ width: column.width }}
            sx={{
              backgroundColor: 'background.paper',
            }}
          >
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    );
  }

  function rowContent(_index, row) {

    return (
      <React.Fragment>
        {columns.map((column) => (
          <TableCell
            key={column.dataKey}
            align={column.numeric || false ? 'right' : 'left'}
          >
            {row[column.dataKey]}
          </TableCell>
        ))}
      </React.Fragment>
    );
  }

  // ----------------------------------------------------------------------



  return (
    <Paper style={{ height: 450, width: '330px' }}>
      {userID && <TableVirtuoso
        data={rows}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />}
      {console.log("wwwwwwwwww", userID)}
    </Paper>
  );
}

export default NewwindowTable;