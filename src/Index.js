import React from 'react';
import Header from './Header';
import Apps from './AppList/AppList';
import Footer from './Footer';

export default function Index() {
  return (
    <div>
      <Header />
      <Apps />
      <Footer />
    </div>
  );
}
