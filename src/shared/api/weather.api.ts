import axios, { AxiosResponse } from 'axios';
import { BASE_URL } from '../constants';
import generateHeader from './config.api';

export const requestWeather: (
  geolocation?: any,
  unit?: any
) => Promise<AxiosResponse<any>> = async (geolocation, unit) => {
  const { latitude: lat, longitude: lon } = geolocation;

  return await axios.get(
    `${BASE_URL}?lat=${lat}&lon=${lon}&u=${unit}&format=json`,
    generateHeader(`${lat}`, `${lon}`, unit)
  );
};
