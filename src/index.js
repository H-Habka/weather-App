import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material';
import { HashRouter as Router } from 'react-router-dom'
import { store,persistor } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';





const customTheme = createTheme({
  palette: {
    primary: {
      main: '#EDEDED',

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
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Router>
    </Provider>
  </ThemeProvider>
  ,
  document.getElementById('root')
);
