import React from 'react';
import AppItem from './AppItem';

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
    const appItems = this.props.apps.map((appData) =>
      <AppItem app={appData} key={appData.key} />
    );

    return (
      <div className="apps">
        { appItems }
      </div>
    );
  }
}

AppList.propTypes = propTypes;

export default AppList;
