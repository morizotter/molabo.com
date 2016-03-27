import React from 'react';
const eyeCatch = require('../../Resource/popon.jpg');

const style = {
  content: {
    background: '#efefef',
    height: '300px',
    overflow: 'hidden',
    backgroundImage: `url(${eyeCatch})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    position: 'relative',
  },
  title: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    margin: '-30px 0px 0px -150px',
    padding: '8px',
    width: '300px',
    height: '60px',
    textAlign: 'center',
    backgroundColor: '#0f0f0f',
    opacity: 0.9,
    h1: {
      margin: '0px',
      fontSize: '38px',
      color: '#bbbbbb',
    },
  },
};

/* Fix for using loader */
class EyeCatch extends React.Component {
  static methodsAreOk() {
    return true;
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div style={style.content}>
            <div style={style.title}>
              <h1 style={style.title.h1}>molabo apps</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EyeCatch;
