import { baseURL, cookieName } from './config';

import axios from 'axios';
import cookie from 'cookiejs';

export const instance = axios.create({
  baseURL,
});

instance.interceptors.request.use(
  config => {
    if (process.env.NODE_ENV === 'development') {
      console.log(
        `%c${config.method?.toUpperCase()} ${config.baseURL}${config.url}`,
        'color: yellow',
      );
      console.log('Payload:', config.data);
    }

    config.headers['Authorization'] = `${cookie.get(cookieName)}`;

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
