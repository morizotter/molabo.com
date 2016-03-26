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
    padding: '0px',
    margin: '0px',
  },
  content: {
    backgroundColor: 'lightGray',
  },
  h3: {
    margin: '0px',
  },
};

class AppCell extends React.Component {
  static methodsAreOk() {
    return true;
  }

  render() {
    return (
      <div className="col-sm-4" style={style.cell}>
        <div style={style.content}>
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
