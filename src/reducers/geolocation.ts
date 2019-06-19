import {
  FETCH_GEOLOCATION_START,
  FETCH_GEOLOCATION_SUCCESS,
  FETCH_GEOLOCATION_FAILURE
} from '../shared';

const initialState = {
  fetching: false,
  userGeolocation: {
    latitude: 48.29149,
    longitude: 25.94034
  },
  error: null
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
        userGeolocation: payload
      };

    case FETCH_GEOLOCATION_FAILURE:
      return {
        ...initialState,
        error: payload
      };

    default:
      return state;
  }
};
