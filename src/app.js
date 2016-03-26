import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main/Main';
require('../node_modules/bootstrap/dist/css/bootstrap.css');

function App() {
  return <Main />;
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
