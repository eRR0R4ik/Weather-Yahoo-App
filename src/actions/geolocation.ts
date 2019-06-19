import {
  FETCH_GEOLOCATION_START,
  FETCH_GEOLOCATION_SUCCESS,
  FETCH_GEOLOCATION_FAILURE,
  getCurrentPosition
} from '../shared';

export function getLocation() {
  return async (dispatch: any) => {
    dispatch({ type: FETCH_GEOLOCATION_START });

    const geolocation = navigator.geolocation;

    if (!geolocation) {
      dispatch({
        type: FETCH_GEOLOCATION_FAILURE,
        payload: "Your browser doesn't support geolocation"
      });
    } else {
      try {
        const res = await getCurrentPosition();

        dispatch({
          type: FETCH_GEOLOCATION_SUCCESS,
          payload: res
        });
      } catch (error) {
        dispatch({
          type: FETCH_GEOLOCATION_FAILURE,
          payload: error
        });
      }
    }
  };
}
