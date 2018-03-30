import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

ReactDOM.render(
  <App initialData={window.initialData} />,
  document.getElementById('root')
);
