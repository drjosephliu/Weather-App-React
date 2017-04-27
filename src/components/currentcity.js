import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCurrentCity, renderWeatherIcon } from '../actions/index';

const API_KEY = '95108d63b7f0cf597d80c6d17c8010e0';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/weather?'

class CurrentCity extends Component {
  constructor(props) {
    super(props)

    this.props.fetchCurrentCity();
  }

  renderCurrentCity(city) {
    const cTemp = (city.temp - 273.15).toFixed(1);
    const fTemp = (city.temp * 9/5 - 459.67).toFixed(1);


    return(
      <div>
        <li>{city.city}, {city.country_name}</li>
        <li>{ this.props.celsius ? cTemp + '°C' : fTemp + '°F' }</li>
        <li><i className={this.props.weatherIcon(city.weather)}></i> {city.weather}</li>
      </div>

    )
  }

  render() {
    return (
      <ul className='list-unstyled'>
        {this.renderCurrentCity(this.props.currentCity)}
      </ul>
    )
  }
}

function mapStateToProps({ currentCity, celsius }) {
  return { currentCity, celsius };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchCurrentCity }, dispatch);
// }

export default connect(mapStateToProps, { fetchCurrentCity, renderWeatherIcon })(CurrentCity);
