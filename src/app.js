import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';

import appsData from './Data/Apps';

ReactDOM.render(
  <Main apps={appsData} />,
  document.getElementById('app')
);
