import React from 'react';

import Header from './Header';
import AppList from './AppList/AppList';
import Footer from './Footer';

const propTypes = {
  mainInfo: React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    apps: React.PropTypes.array.isRequired,
  }),
};

class Main extends React.Component {
  static methodsAreOk() {
    return true;
  }

  render() {
    return (
      <div>
        <Header title={this.props.mainInfo.title} />
        <AppList apps={this.props.mainInfo.apps} />
        <Footer />
      </div>
    );
  }
}

Main.propTypes = propTypes;

export default Main;
