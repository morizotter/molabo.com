import React from 'react';
import appData from '../Data/AppData';

const style = {
  body: {
    height: '200px',
    padding: '10px',
    backgroundColor: '#efefef',
  },
  list: {
    marginBottom: '0px',
  },
  a: {
    width: '400px',
    textAlign: 'center',
  },
};

class Footer extends React.Component {
  static methodsAreOk() {
    return true;
  }

  render() {
    return (
      <div className="footer row" style={style.body}>
        <div className="center-block" style={style.a}>
          <ul className="list-inline" style={style.list}>
            <li><p>{appData.author.name}</p></li>
            <li><p><a href="{appData.author.twitterUrl}">@morizotter</a></p></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
