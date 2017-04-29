import axios from 'axios';

export const FETCH_CITIES = 'FETCH_CITIES';
export const FETCH_CURRENT_CITY = 'FETCH_CURRENT_CITY';
export const FETCH_CURRENT_CITY_LOCATION = 'FETCH_CURRENT_CITY_LOCATION';
export const TOGGLE_CELSIUS = 'TOGGLE_CELSIUS';
export const HAS_ERRORED = 'HAS_ERRORED';

const API_KEY = '95108d63b7f0cf597d80c6d17c8010e0';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

export function fetchCities(city) {
  const url = `${ROOT_URL}&q=${city}`;

  const request = axios.get(url);

  return (dispatch) => {
    request
    .then(({data}) => {
      console.log('request:', data);
      dispatch({
        type: FETCH_CITIES,
        payload: data
      })
      dispatch(hasErrored(false));
    })
    .catch(() => dispatch(hasErrored(true)))
  }
}

export function hasErrored(bool) {
  return {
    type: HAS_ERRORED,
    bool: bool
  };
}


export function fetchCurrentCity() {
  const url = 'https://freegeoip.net/json/';

  const requestGeoIp = axios.get(url);

  return (dispatch) => {
    requestGeoIp.then(({data}) => {
      const lat = data.latitude;
      const lon = data.longitude;


      dispatch({
        type: FETCH_CURRENT_CITY_LOCATION,
        payload: data
      })

      const url = `${ROOT_URL}&lat=${lat}&lon=${lon}`;

      const requestWeather = axios.get(url);

      requestWeather.then(({data}) => {
        dispatch({
          type: FETCH_CURRENT_CITY,
          payload: data
        });
      });
    })
  }
}


export function toggleCelsius() {
  return  {
    type: TOGGLE_CELSIUS
  }
}
