import {
  FETCH_WEATHER_START,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
  CHANGE_UNIT_FORMAT,
  requestWeather
} from '../shared';

export function getWeather() {
  return async (dispatch: any, getState: any) => {
    dispatch({ type: FETCH_WEATHER_START });

    try {
      const res = await requestWeather();

      dispatch({
        type: FETCH_WEATHER_SUCCESS,
        payload: res
      });
    } catch (error) {
      dispatch({
        type: FETCH_WEATHER_FAILURE,
        payload: error
      });
    }
  };
}

export function changeUnitFormat(format: string) {
  return (dispatch: any) => {
    dispatch({ type: CHANGE_UNIT_FORMAT, payload: format });
  };
}

// import {
//   FETCH_WEATHER_START,
//   FETCH_WEATHER_SUCCESS,
//   FETCH_WEATHER_FAILURE,
//   CHANGE_UNIT_FORMAT,
//   requestWeather
// } from '../shared';

// export function getWeather() {
//   return async (dispatch: any, getState: any) => {
//     const {
//       geolocation: { userGeolocation },
//       weather: { unitFormat }
//     } = getState();

//     dispatch({ type: FETCH_WEATHER_START });

//     try {
//       const res = await requestWeather(userGeolocation, unitFormat);

//       dispatch({
//         type: FETCH_WEATHER_SUCCESS,
//         payload: res
//       });
//     } catch (error) {
//       dispatch({
//         type: FETCH_WEATHER_FAILURE,
//         payload: error
//       });
//     }
//   };
// }

// export function changeUnitFormat(format: string) {
//   return (dispatch: any) => {
//     dispatch({ type: CHANGE_UNIT_FORMAT, payload: format });
//   };
// }
