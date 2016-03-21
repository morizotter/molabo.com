import React from 'react';
import AppItem from './AppItem';
import apps from '../Data/Apps';

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
