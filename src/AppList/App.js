import React, { PropTypes } from 'react';

const propTypes = {
  name: PropTypes.string.isRequired,
};

const defaultProps = {
  name: 'name',
};

class App extends React.Component {
  static methodsAreOk() {
    return true;
  }

  render() {
    return (
      <div>
        {this.props.name}
      </div>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
