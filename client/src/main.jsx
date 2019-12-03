import React from 'react';
import ReactDOM from 'react-dom';
// import { ThemeProvider } from '@material-ui/styles';
// import { buildIconLibrary } from 'config/font-awesome-config';
// import { baseTheme } from 'config/material-ui-config';
// import App from 'components/App';
// import './main.scss';

// Build icon library
// buildIconLibrary();

// Root markup
// const Root = (
//   <ThemeProvider theme={baseTheme()}>
//     <h1>Hello World</h1>
//     {/* <App /> */}
//   </ThemeProvider>
// );

const Root = (
  <h1>Hello World!</h1>
);

ReactDOM.render(Root, document.getElementById('root'));
