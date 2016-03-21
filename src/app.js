import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';

import appsData from './Data/Apps';

const mainInfoData = {
  title: 'Molabo apps',
  apps: appsData,
};

ReactDOM.render(
  <Main mainInfo={mainInfoData} />,
  document.getElementById('app')
);
