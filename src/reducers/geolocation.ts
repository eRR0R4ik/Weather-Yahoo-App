import {
  FETCH_GEOLOCATION_START,
  FETCH_GEOLOCATION_SUCCESS,
  FETCH_GEOLOCATION_FAILURE,
  HIDE_GEOLOCATION_MSG
} from '../shared';

const initialState = {
  fetching: false,
  userGeolocation: {
    latitude: 48.29149,
    longitude: 25.94034
  },
  error: false,
  msg: ''
};

export default (
  state = initialState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case FETCH_GEOLOCATION_START:
      return {
        ...state,
        fetching: true
      };

    case FETCH_GEOLOCATION_SUCCESS:
      return {
        ...state,
        fetching: false,
        userGeolocation: payload,
        msg: 'Geolocation successfully received data'
      };

    case FETCH_GEOLOCATION_FAILURE:
      return {
        ...initialState,
        error: true,
        msg: payload.message
      };

    case HIDE_GEOLOCATION_MSG:
      return {
        ...initialState,
        error: false,
        msg: ''
      };

    default:
      return state;
  }
};
