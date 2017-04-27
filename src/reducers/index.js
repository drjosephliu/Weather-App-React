import { combineReducers } from 'redux';
import CitiesReducer from './reducer_cities';
import CurrentCityReducer from './reducer_currentcity';
import ToggleCelsiusReducer from './reducer_togglecelsius';
import HasErroredReducer from './reducer_haserrored';

const rootReducer = combineReducers({
  cities: CitiesReducer,
  currentCity: CurrentCityReducer,
  celsius: ToggleCelsiusReducer,
  error: HasErroredReducer
});

export default rootReducer;
