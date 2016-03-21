import React from 'react';

import Header from './Header';
import AppList from './AppList/AppList';
import Footer from './Footer';

const propTypes = {
  mainInfo: React.PropTypes.shape({
    apps: React.PropTypes.array.isRequired,
  }).isRequired,
};

class Main extends React.Component {
  static methodsAreOk() {
    return true;
  }

  render() {
    return (
      <div>
        <Header />
        <AppList apps={this.props.mainInfo.apps} />
        <Footer />
      </div>
    );
  }
}

Main.propTypes = propTypes;

export default Main;
