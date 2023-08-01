import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './appbar.css';
function appBarLabel(label) {
  return (
    <Toolbar>
      {/* <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton> */}
     
      <Typography variant="h8" noWrap component="div" sx={{ flexGrow: 1 }} id='typo'>
        {label}
      </Typography>
     
     
    </Toolbar>
  );
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2B3140',
    },
  },
});

export default function ManagementNav() {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" className='pushed' enableColorOnDark id='typo-div'>
          {appBarLabel('classes')}
          {appBarLabel('management')}
        </AppBar>
       
      </ThemeProvider>
    </Stack>
  );
}