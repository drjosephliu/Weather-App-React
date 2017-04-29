import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherList from './weatherlist';
import SearchBar from './searchbar';
import CurrentCity from './currentcity';
import ToggleCelsius from './togglecelsius';


class App extends Component {
  constructor(props) {
    super(props);

    this.renderWeatherIcon = this.renderWeatherIcon.bind(this);
  }

  renderWeatherIcon(weather) {
    var icon = 'wi ';

    switch(weather) {
      case 'Rain':
        return icon += ' wi-rain';
      case 'Thunderstorm':
        return icon += ' wi-thunderstorm';
      case 'Drizzle':
        return icon += ' wi-rain-mix';
      case 'Snow':
        return icon += ' wi-snow';
      case 'Clear':
        return icon += ' wi-day-sunny';
      case 'Clouds':
        return icon += ' wi-cloudy';
    }
  }

  render() {
    return (
      <div className={this.props.cities == false ? 'search': 'search-up'}>
        <h1>What's the weather today?</h1>
        <div className='container-box'>
          <CurrentCity
            weatherIcon={this.renderWeatherIcon} />
          <ToggleCelsius />
        </div>
        <SearchBar />
        {this.props.cities == false ? null :
          <WeatherList
            weatherIcon={this.renderWeatherIcon} />}
      </div>
    )
  }
}

function mapStateToProps({ cities }) {
  return { cities };
}

export default connect(mapStateToProps)(App);
