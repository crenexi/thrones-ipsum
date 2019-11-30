import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/styles';
import { buildIconLibrary } from 'config/font-awesome-config';
import { baseTheme } from 'config/material-ui-config';
import App from 'components/App/App';
import './main.scss';

// Build icon library
buildIconLibrary();

// Root markup
const Root = (
  <ThemeProvider theme={baseTheme()}>
    <App />
  </ThemeProvider>
);

ReactDOM.render(Root, document.getElementById('root'));
