import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './styles/GlobalStyle';
import Typography from './styles/Typography';
import GeneralStyle from './styles/General';

ReactDOM.render(
  <>
    <GlobalStyles />
    <Typography />
    <GeneralStyle />
    <App />
  </>,
  document.getElementById('root')
);
