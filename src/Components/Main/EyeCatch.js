import React from 'react';

const style = {
  content: {
    background: '#efefef',
    height: '400px',
    overflow: 'hidden',
    // backgroundImage: 'url(' + './src/Resource/stopwatch.png' + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  },
};

/* Fix for using loader */
class EyeCatch extends React.Component {
  static methodsAreOk() {
    return true;
  }

  render() {
    return (
      <div className="row">
      <div style={style.content}>
      </div>
      </div>
    );
  }
}

export default EyeCatch;
