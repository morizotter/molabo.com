import React, { PropTypes } from 'react';

const propTypes = {
  info: React.PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};

const defaultProps = {
  info: {
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
        {this.props.info.name}
      </div>
    );
  }
}

AppItem.propTypes = propTypes;
AppItem.defaultProps = defaultProps;

export default AppItem;
