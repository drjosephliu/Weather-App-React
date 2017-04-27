import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleCelsius } from '../actions/index';

class ToggleCelsius extends Component {
  render() {
    return (
      <div className='unit-toggle'>
        <div className='unit-symbol'>°C</div>
        <label className="switch">
          <input type="checkbox" onChange={this.props.toggleCelsius} />
          <div className="slider round"></div>
        </label>
        <div className='unit-symbol'>°F</div>
      </div>
    )
  }
}

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({ toggleCelsius }, dispatch);
// }

export default connect (null, { toggleCelsius })(ToggleCelsius);
