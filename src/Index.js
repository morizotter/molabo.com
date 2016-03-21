import React from 'react';

import Header from './Header';
import AppList from './AppList/AppList';
import Footer from './Footer';

import apps from './Data/Apps';

export default function Index() {
  return (
    <div>
      <Header />
      <AppList apps={apps} />
      <Footer />
    </div>
  );
}
