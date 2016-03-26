import React, { PropTypes } from 'react';

const propTypes = {
  app: React.PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

const defaultProps = {
  app: {
    name: 'app',
  },
};

const style = {
  cell: {
    margin: '0px',
  },
  content: {
    padding: '16px',
    minHeight: '200px',
  },
  h3: {
    marginTop: '0px',
    marginBottom: '10px',
  },
};

class AppCell extends React.Component {
  static methodsAreOk() {
    return true;
  }

  render() {
    return (
      <div className="col-sm-4 col-md-3" style={style.cell}>
        <div className="panel panel-default" style={style.content}>
          <h3 style={style.h3}>{this.props.app.name}</h3>
          <p>{this.props.app.description}</p>
        </div>
      </div>
    );
  }
}

AppCell.propTypes = propTypes;
AppCell.defaultProps = defaultProps;

export default AppCell;
