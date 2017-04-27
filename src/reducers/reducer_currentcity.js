import { FETCH_CURRENT_CITY, FETCH_CURRENT_CITY_LOCATION } from '../actions/index';

const INITIAL_STATE = { city: null, country: null, temp: null, weather: null };

export default function(state = INITIAL_STATE, action) {

  switch(action.type) {
    case FETCH_CURRENT_CITY:
    return {
      ... state,
      temp: action.payload.main.temp,
      weather: action.payload.weather[0].main
    };

    case FETCH_CURRENT_CITY_LOCATION:
    return {
      ...state,
      city: action.payload.city,
      country: action.payload.country_name
    }
  }
  return state;
}
