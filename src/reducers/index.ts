import { combineReducers } from 'redux';
import geolocation from './geolocation';
import weather from './weather';

export default combineReducers({
  geolocation,
  weather
});
