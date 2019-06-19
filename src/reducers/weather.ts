import {
  FETCH_WEATHER_START,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
  CHANGE_UNIT_FORMAT
} from '../shared';

const initialState = {
  fetching: false,
  weatherData: null,
  unitFormat: 'f',
  error: null
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
        data: payload
      };

    case FETCH_WEATHER_FAILURE:
      return {
        ...state,
        error: payload
      };

    case CHANGE_UNIT_FORMAT:
      return {
        ...state,
        unitFormat: payload
      };

    default:
      return state;
  }
};
