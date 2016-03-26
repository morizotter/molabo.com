import React from 'react';
import appData from '../Data/AppData';

const style = {
  body: {
    height: '44px',
    padding: '10px',
    backgroundColor: '#0277BD',
  },
  title: {
    fontSize: '22px',
    fontWeight: 'normal',
    color: '#eeeeee',
    margin: '0px',
  },
};

class Header extends React.Component {
  static methodsAreOk() {
    return true;
  }

  render() {
    return (
      <div className="header row" style={style.body}>
        <h1 style={style.title}>{appData.title}</h1>
      </div>
    );
  }
}

export default Header;
