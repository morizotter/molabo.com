import React from 'react';
import AppCell from './AppCell';

const propTypes = {
  apps: React.PropTypes.arrayOf(
    React.PropTypes.any.isRequired
  ).isRequired,
};

const style = {
  body: {
    marginLeft: '-5px',
    marginRight: '-5px',
    marginTop: '20px',
    marginBottom: '20px',
  },
  row: {
    margin: '0px auto',
  },
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
      <div className="container">
        <div className="apps row" style={style.body}>
          <div className="row" style={style.row}>
            { appCells }
          </div>
        </div>
      </div>
    );
  }
}

AppList.propTypes = propTypes;

export default AppList;
