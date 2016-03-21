import React from 'react';
import appData from '../Data/AppData';

const style = {
  footer: {
    backgroundColor: 'lightGray',
  },
};

class Footer extends React.Component {
  static methodsAreOk() {
    return true;
  }

  render() {
    return (
      <div className="footer" style={style.footer}>
        <ul>
          <li><p>{appData.author.name}</p></li>
          <li><p>{appData.author.twitterUrl}</p></li>
        </ul>
      </div>
    );
  }
}

export default Footer;
