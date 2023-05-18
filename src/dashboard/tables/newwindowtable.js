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



const checks = (<Checkboxes />);


const sample = [
  ['Joel John', checks],
  ['Hamis Hakim', checks],
  ['Abdul Ndugu', checks],
  ['Jumbe Anna', checks],
  ['Paul Chula', checks],
  ['Khalid Amed', checks],
  ['Koku Banza', checks],
  ['Figo Luis', checks],
  ['Ally Mjahidin', checks]

];


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

const rows = Array.from({ length: 50 }, (_, index) => {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  return createData(index, ...randomSelection);
});

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

function NewwindowTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchdata();
  }, [])

  async function fetchdata() {
    const response = await getUsers();
    if (response) {
      console.log(response.data);

      // const sample = [
      //   ['Joel John', checks],
      //   ['Hamis Hakim', checks],
      //   ['Abdul Ndugu', checks],
      //   ['Jumbe Anna', checks],
      //   ['Paul Chula', checks],
      //   ['Khalid Amed', checks],
      //   ['Koku Banza', checks],
      //   ['Figo Luis', checks],
      //   ['Ally Mjahidin', checks]

      // ];
      setUsers(sample)
    }
    else {
      console.log("no data")
    }

  }


  return (
    <Paper style={{ height: 450, width: '330px' }}>
      <TableVirtuoso
        data={rows}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
}

export default NewwindowTable;