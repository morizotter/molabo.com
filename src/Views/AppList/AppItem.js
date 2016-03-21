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

class AppItem extends React.Component {
  static methodsAreOk() {
    return true;
  }

  render() {
    return (
      <div>
        <h3>{this.props.app.name}</h3>
        <p>{this.props.app.description}</p>
      </div>
    );
  }
}

AppItem.propTypes = propTypes;
AppItem.defaultProps = defaultProps;

export default AppItem;
