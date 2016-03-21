import React from 'react';
import AppItem from './AppItem';

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
  const appItems = apps.map((app) =>
    <AppItem info={app.info} key={app.key} />
  );

  apps.forEach((app) => {
    console.log(app);
  });

  return (
    <div className="apps">
      { appItems }
    </div>
  );
}
