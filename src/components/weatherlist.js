import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMap from './googlemap';

class WeatherList extends Component {

  renderWeather(cityData) {

    const name = cityData.name;
    const country = cityData.sys.country;
    const cTemp = (cityData.main.temp - 273.15).toFixed(1);
    const fTemp = (cityData.main.temp * 9/5 - 459.67).toFixed(1);
    const weather = cityData.weather[0].main;
    const lat = cityData.coord.lat;
    const lon = cityData.coord.lon;

    return (
      <tr key={name}>
        <td><GoogleMap lat={lat} lon={lon} /></td>
        <td>{ this.props.celsius ? cTemp : fTemp }</td>
        <td><i className={this.props.weatherIcon(weather)}></i> {weather}</td>
      </tr>
    )
  }

  render() {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature °<span>{ this.props.celsius ? 'C' : 'F' }</span></th>
            <th>Weather</th>
          </tr>
        </thead>
        <tbody>
          {this.props.cities.map(this.renderWeather.bind(this))}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ cities, celsius }) {
  return { cities, celsius };
}

export default connect(mapStateToProps)(WeatherList);
