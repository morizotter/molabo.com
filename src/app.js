import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';

import appsData from './Data/AppsData';

const mainInfoData = {
  apps: appsData,
};

ReactDOM.render(
  <Main mainInfo={mainInfoData} />,
  document.getElementById('app')
);
