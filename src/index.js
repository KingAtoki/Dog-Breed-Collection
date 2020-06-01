import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import { teal } from "@material-ui/core/colors"
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import './index.css';

const theme = createMuiTheme({
  palette: {
    primary: teal,
  },
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
