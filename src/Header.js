import React from 'react';

const propTypes = {
  title: React.PropTypes.string.isRequired,
};

class Header extends React.Component {
  static methodsAreOk() {
    return true;
  }

  render() {
    return (
      <div className="header">
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

Header.propTypes = propTypes;

export default Header;
