import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material';


const customTheme = createTheme({
  palette: {
    primary: {
      main:'#408000',
     
    }
    // secondary:{
    //   main:
    // }
  },
});

ReactDOM.render(
      <ThemeProvider theme={customTheme}>
        <App />
      </ThemeProvider>
  ,
  document.getElementById('root')
);
