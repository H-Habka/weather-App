import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom'
import { store } from './redux/store';
import { Provider } from 'react-redux';



const customTheme = createTheme({
  palette: {
    primary: {
      main: '#408088',

    }
    // secondary:{
    //   main:
    // }
  },
});

ReactDOM.render(
  <ThemeProvider theme={customTheme}>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </ThemeProvider>
  ,
  document.getElementById('root')
);
