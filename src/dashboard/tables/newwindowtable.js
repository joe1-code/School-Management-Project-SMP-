import * as React from 'react';
import { useDispatch } from "react-redux";
import { reducerf } from "../../store";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso } from 'react-virtuoso';
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import Checkboxes from '../Admin/Panel/Window/checkbox';
import { getUsers } from '../../client/client';
import Checkbox from '@mui/material/Checkbox';



// const checks = (<Checkboxes />);

function NewwindowTable() {
  const label = { inputprops: { 'arial-label': "checkbox" } };
  const [users, setUsers] = useState([]);
  const [userID, setUserID] = useState([]);
  const { windowMembers } = useSelector((state) => state.store.initialStore);


  const dispatch = useDispatch();

  let addUser = []

  useEffect(() => {
    fetchdata();
  }, []);

  const handleCheck4 = (data, e) => {
    const { userid } = data.data;

    console.log("IDs", userid);

    if (e.target.checked) {

      addUser.push(userid);
      // addUser = [...addUser]
      // let newdat = addUser
      console.log("added members in array", addUser);
      dispatch(reducerf({ windowMembers: [...addUser] }));

    }
    else {
      addUser = addUser.filter((element) => element !== userid)
      console.log("members left in array", addUser)
      dispatch(reducerf({ windowMembers: [...addUser] }));

    }

  }


  function CheckBox(item) {
    return (
      <div>
        <input type="checkbox" onClick={(e) => handleCheck4(item, e)} />
      </div>
    )
  }



  async function fetchdata() {
    const data = await getUsers();
    if (data) {
      const members = data.data.map((item) => {
        const { fullname, userid } = item;


        console.log(userid)
        // return [fullname, <Checkbox {...label} onChange={(e) => handleCheck4(item, e)} />]
        return [fullname, <CheckBox data={item} />

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
      <button id="butreg" variant="outlined" >Submit</button>
    </Paper>
  );


}
export default React.memo(NewwindowTable);