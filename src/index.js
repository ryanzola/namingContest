import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

import data from './testData';

ReactDOM.render(
  <App contests={data.contests}/>,
  document.getElementById('root')
);
