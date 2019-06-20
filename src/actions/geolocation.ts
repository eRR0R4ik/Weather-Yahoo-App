import {
  FETCH_GEOLOCATION_START,
  FETCH_GEOLOCATION_SUCCESS,
  FETCH_GEOLOCATION_FAILURE,
  HIDE_GEOLOCATION_MSG,
  MSG_HIDE_TIME,
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
        const res: any = await getCurrentPosition();

        if (res && res.coords) {
          const { latitude, longitude } = res.coords;
          dispatch({
            type: FETCH_GEOLOCATION_SUCCESS,
            payload: {
              latitude,
              longitude
            }
          });
        }
        setTimeout(() => {
          dispatch({ type: HIDE_GEOLOCATION_MSG });
        }, MSG_HIDE_TIME);
      } catch (error) {
        dispatch({
          type: FETCH_GEOLOCATION_FAILURE,
          payload: error
        });

        setTimeout(() => {
          dispatch({ type: HIDE_GEOLOCATION_MSG });
        }, MSG_HIDE_TIME);
      }
    }
  };
}
