import React, { PropTypes } from 'react';

const propTypes = {
  app: React.PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
};

const defaultProps = {
  app: {
    name: 'app',
  },
};

const style = {
  cell: {
    margin: '0px',
    paddingLeft: '10px',
    paddingRight: '10px',
  },
  content: {
    minHeight: '300px',
  },
  h3: {
    margin: '10px',
  },
  image: {
    margin: '10px',
    width: '100px',
    height: '100px',
  },
  description: {
    margin: '10px',
  },
};

class AppCell extends React.Component {
  static methodsAreOk() {
    return true;
  }

  render() {
    return (
      <div className="col-sm-6 col-md-4 col-lg-3" style={style.cell}>
        <div className="panel panel-default" style={style.content}>
          <img src={this.props.app.image} alt="Image" className="img-rounded" style={style.image}  />
          <h3 style={style.h3}>{this.props.app.name}</h3>
          <p style={style.description}>{this.props.app.description}</p>
        </div>
      </div>
    );
  }
}

AppCell.propTypes = propTypes;
AppCell.defaultProps = defaultProps;

export default AppCell;
