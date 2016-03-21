import React from 'react';
import appData from './Data/AppData';

const style = {
  header: {
    backgroundColor: '#ff00ff',
  },
};

class Header extends React.Component {
  static methodsAreOk() {
    return true;
  }

  render() {
    return (
      <div className="header" style={style.header} >
        <h1>{appData.title}</h1>
        <p>{appData.description}</p>
      </div>
    );
  }
}

export default Header;
