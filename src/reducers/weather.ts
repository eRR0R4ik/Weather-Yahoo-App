import {
  FETCH_WEATHER_START,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
  CHANGE_UNIT_FORMAT,
  HIDE_WEATHER_MSG
} from '../shared';
const dataJson: any = localStorage.getItem('initWeather');
const parsedObj = JSON.parse(dataJson) || {}; // also we could use lodash here

const initialState = {
  fetching: false,
  weatherData: parsedObj.data || null,
  fechedAt: parsedObj.fechedAt || null,
  unitFormat: localStorage.getItem('lastRequestedUnit') || 'f',
  error: false,
  msg: ''
};

export default (
  state = initialState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case FETCH_WEATHER_START:
      return {
        ...state,
        fetching: true
      };

    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        fetching: false,
        weatherData: payload.data,
        fechedAt: payload.fechedAt,
        msg: 'Weather successfully fetched'
      };

    case FETCH_WEATHER_FAILURE:
      return {
        ...state,
        error: true,
        msg: payload
      };

    case CHANGE_UNIT_FORMAT:
      return {
        ...state,
        unitFormat: payload
      };

    case HIDE_WEATHER_MSG:
      return {
        ...state,
        error: false,
        msg: ''
      };

    default:
      return state;
  }
};
