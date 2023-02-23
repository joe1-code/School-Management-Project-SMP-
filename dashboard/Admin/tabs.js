import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


function CentredTabs(){
 const [Value, setValue] =React.useState(0);

 const handleChange=(event, newValue)=>{
   setValue(newValue);
 }

 return (
  <Box sx={{width: '120%', bgcolor: 'background.paper'}}>
   <Tabs value={Value} onChange={handleChange} centered>
     <Tab label="DEBITS" />
     <Tab label="PROFITS" />
     <Tab label="CONTRIBUTORS" />
     <Tab label="EXPENDITURES" />
   </Tabs>
  </Box>
 );
}

export default CentredTabs;