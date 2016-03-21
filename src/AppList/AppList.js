import React from 'react';
import App from './App';

const apps = [
  {
    key: '0',
    info: {
      name: 'app a',
    },
  },
  {
    key: '1',
    info: {
      name: 'app b',
    },
  },
  {
    key: '2',
    info: {
      name: 'app c',
    },
  },
];

export default function AppList() {
  const appNodes = apps.map((app) =>
    <App name={app.info.name} key={app.key} />
  );

  apps.forEach((app) => {
    console.log(app);
  });

  return (
    <div className="apps">
      { appNodes }
    </div>
  );
}
