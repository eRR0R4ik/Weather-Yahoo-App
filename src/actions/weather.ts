import {
  FETCH_WEATHER_START,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
  CHANGE_UNIT_FORMAT,
  HIDE_WEATHER_MSG,
  MSG_HIDE_TIME,
  requestWeather
} from '../shared';
import moment from 'moment';

export function getWeather() {
  return async (dispatch: any, getState: any) => {
    const {
      geolocation: { userGeolocation },
      weather: { unitFormat }
    } = getState();
    const unit = unitFormat || localStorage.getItem('lastRequestedUnit');

    dispatch({ type: FETCH_WEATHER_START });

    try {
      const { data } = await requestWeather(userGeolocation, unit);
      const payload = {
        data,
        fechedAt: moment().calendar()
      };

      localStorage.setItem('initWeather', JSON.stringify(payload));
      localStorage.setItem('lastRequestedUnit', unit);

      dispatch({
        type: FETCH_WEATHER_SUCCESS,
        payload
      });

      setTimeout(() => {
        dispatch({ type: HIDE_WEATHER_MSG });
      }, MSG_HIDE_TIME);

    } catch (error) {
      dispatch({
        type: FETCH_WEATHER_FAILURE,
        payload: 'Fetching weather failed'
      });

      setTimeout(() => {
        dispatch({ type: HIDE_WEATHER_MSG });
      }, MSG_HIDE_TIME);
    }
  };
}

export function changeUnitFormat(format: string) {
  return (dispatch: any) => {
    dispatch({ type: CHANGE_UNIT_FORMAT, payload: format });
  };
}
