import React from 'react';
import AppCell from './AppCell';

const propTypes = {
  apps: React.PropTypes.arrayOf(
    React.PropTypes.any.isRequired
  ).isRequired,
};

class AppList extends React.Component {
  static methodsAreOk() {
    return true;
  }

  render() {
    const appCells = this.props.apps.map((appData) =>
      <AppCell app={appData} key={appData.key} />
    );

    return (
      <div className="apps">
        { appCells }
      </div>
    );
  }
}

AppList.propTypes = propTypes;

export default AppList;
