import React from 'react';

import Header from './Header';
import AppList from './AppList/AppList';
import Footer from './Footer';

import appsData from './Data/AppsData';

class Main extends React.Component {
  static methodsAreOk() {
    return true;
  }

  render() {
    return (
      <div>
        <Header />
        <AppList apps={appsData} />
        <Footer />
      </div>
    );
  }
}

export default Main;
