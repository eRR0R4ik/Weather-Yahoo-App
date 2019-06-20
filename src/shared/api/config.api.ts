import CryptoJS from 'crypto-js';
import { BASE_URL, APP_ID, CONSUMER_KEY, CONSUMER_SECRET } from '../constants';

function generateHeader(lat: string, lon: string, u: string) {
  const method = 'GET';
  const concat = '&';
  // const query = { lat, lon, unit, format: 'json' };
  const query = { lat, lon, format: 'json', u };

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

  return {
    headers: { Authorization: auth_header, 'X-Yahoo-App-Id': APP_ID }
  };
}
// export function applyConfig() {}

export default generateHeader;
