import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { color, style } from '@mui/system';


function CentredTabs(){
 const [Value, setValue] =React.useState(0);

 const handleChange=(event, newValue)=>{
   setValue(newValue);
 }

 return (
  <div id='box'>
  <Box sx={{maxWidth: { xs: 360, sm: 480 }, bgcolor: 'background.paper' }}>
   <Tabs value={Value} onChange={handleChange} variant="scrollable" scrollButtons
        allowScrollButtonsMobile>
     <Tab label="DEBTS" />
     <Tab label="PROFITS" />
     <Tab label="CONTRIBUTORS" />
     <Tab label="EXPENDITURES" />
   </Tabs>
  </Box>
  </div>
 );
}

export default CentredTabs;