import CryptoJS from 'crypto-js';
import { BASE_URL, APP_ID, CONSUMER_KEY, CONSUMER_SECRET } from '../constants';
import axios from 'axios';

const method = 'GET';
const concat = '&';
const query = { location: 'sunnyvale,ca', format: 'json' };

const oauth: any = {
  oauth_consumer_key: CONSUMER_KEY,
  oauth_nonce: Math.random()
    .toString(36)
    .substring(2),
  oauth_signature_method: 'HMAC-SHA1',
  oauth_timestamp: parseInt((new Date().getTime() / 1000) as any).toString(),
  oauth_version: '1.0'
};

const merged = Object.assign({}, query, oauth);

// Note the sorting here is required
const merged_arr = Object.keys(merged)
  .sort()
  .map(function(k) {
    return [k + '=' + encodeURIComponent(merged[k])];
  });

const signature_base_str =
  method +
  concat +
  encodeURIComponent(BASE_URL) +
  concat +
  encodeURIComponent(merged_arr.join(concat));

const composite_key = encodeURIComponent(CONSUMER_SECRET) + concat;
const hash = CryptoJS.HmacSHA1(signature_base_str, composite_key);
const signature = hash.toString(CryptoJS.enc.Base64);

oauth['oauth_signature'] = signature;

const auth_header =
  'OAuth ' +
  Object.keys(oauth)
    .map(function(k) {
      return [k + '="' + oauth[k] + '"'];
    })
    .join(',');

export function applyConfig() {}

const requestWeather = async () => {
  return await axios.get(
    `${BASE_URL}?location=${query.location}${concat}format=${query.format}`,
    { headers: { Authorization: auth_header, 'X-Yahoo-App-Id': APP_ID } }
  );
};
// function generateHeader() {
//   return {
//     headers: { Authorization: auth_header, 'X-Yahoo-App-Id': APP_ID }
//   };
// }

export default requestWeather;

// import CryptoJS from 'crypto-js';
// import { BASE_URL, APP_ID, CONSUMER_KEY, CONSUMER_SECRET } from '../constants';

// function generateHeader(lat: number, lon: number, unit: string) {
//   const method = 'GET';
//   const concat = '&';
//   const query = { lat, lon, unit, format: 'json' };

//   const oauth: any = {
//     oauth_consumer_key: CONSUMER_KEY,
//     oauth_nonce: Math.random()
//       .toString(36)
//       .substring(2),
//     oauth_signature_method: 'HMAC-SHA1',
//     oauth_timestamp: parseInt((new Date().getTime() / 1000) as any).toString(),
//     oauth_version: '1.0'
//   };

//   const merged = Object.assign({}, query, oauth);

//   // Note the sorting here is required
//   const merged_arr = Object.keys(merged)
//     .sort()
//     .map(function(k) {
//       return [k + '=' + encodeURIComponent(merged[k])];
//     });

//   const signature_base_str =
//     method +
//     concat +
//     encodeURIComponent(BASE_URL) +
//     concat +
//     encodeURIComponent(merged_arr.join(concat));

//   const composite_key = encodeURIComponent(CONSUMER_SECRET) + concat;
//   const hash = CryptoJS.HmacSHA1(signature_base_str, composite_key);
//   const signature = hash.toString(CryptoJS.enc.Base64);

//   oauth['oauth_signature'] = signature;

//   const auth_header =
//     'OAuth ' +
//     Object.keys(oauth)
//       .map(function(k) {
//         return [k + '="' + oauth[k] + '"'];
//       })
//       .join(',');

//   return {
//     headers: { Authorization: auth_header, 'X-Yahoo-App-Id': APP_ID }
//   };
// }
// // export function applyConfig() {}

// export default generateHeader;
