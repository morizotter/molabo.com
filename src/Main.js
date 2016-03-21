import React from 'react';

import Header from './Header';
import AppList from './AppList/AppList';
import Footer from './Footer';

const propTypes = {
  apps: React.PropTypes.arrayOf(
    React.PropTypes.any.isRequired
  ).isRequired,
};

class Main extends React.Component {
  static methodsAreOk() {
    return true;
  }

  render() {
    return (
      <div>
        <Header />
        <AppList apps={this.props.apps} />
        <Footer />
      </div>
    );
  }
}

Main.propTypes = propTypes;

export default Main;
