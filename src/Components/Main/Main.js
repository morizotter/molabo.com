import React from 'react';

import Header from '../../Views/Header';
import AppList from '../../Views/AppList/AppList';
import Footer from '../../Views/Footer';

import appsData from '../../Data/AppsData';

class Main extends React.Component {
  static methodsAreOk() {
    return true;
  }

  render() {
    return (
      <div className="container-fluid">
        <Header />
        <AppList apps={appsData} />
        <Footer />
      </div>
    );
  }
}

export default Main;
