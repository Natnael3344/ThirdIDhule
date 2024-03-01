import http from 'axios';
import {isEmptyObj} from 'native-base';
import {getData} from './asyncStorage';

export const api='https://dhule.districtpolice.in/';
export const config = {
    endpoint : {
        forgotPassword : 'reset_password',
        loginUrl:'api/app/session/login',
        verifyUrl:'api/app/session/verify',
        menuUrl:'api/app/menu/menu'
        // checkInUrl :'api/app/attendance/check_in',
        // checkUserImagesUrl:'api/app/user_profile/user_profile_status',
        // dataSubmitUrl :'api/app/user_profile/user_profile_img'
    }
}

export default class zpApi {
  static async baseHeaders() {
    const token = await getData('token_value');
    // const token = 'R0VpNTBwSHF5a2VpVU42dEZDSkd5QW83cHo1ZUVnalk4UEV4SGVvcW5PNXdraWwzelNsZHpqWTlFajMzVmMxQ1IyQkV1QlJWb1VURnFUZk1rcjQyNlM0WHNWV09GWEo1Rzl6b1pkdHJReTBLVHpxN3pGcGtSVDRZc0V6WnJVM2g2Y2lFUHIxdXpBbTF0ZUhUVXpjNENV64a15c5f58243';
    //9607862209
    //thirdi@#adivid2017
    return {
      'Content-Type': 'application/x-www-form-urlencoded',
      "Accept": "application/json",
      Authorization: `Bearer ${token}`,
    };
  }

  static baseUrl() {
    return '';
  }

  static get(route, headers, params, timeout = 15000) {
    return this.apiCall('get', route, headers, params, {}, timeout);
  }

  static post(route, headers, params, postData, timeout = 15000) {
    return this.apiCall('post', route, headers, params, postData, timeout);
  }

  static put(route, headers, params, postData, timeout = 15000) {
    return this.apiCall('put', route, headers, params, postData, timeout);
  }

  static delete(route, headers, params, timeout = 15000) {
    return this.apiCall('delete', route, headers, params, {}, timeout);
  }

  static async apiCall(
    requestType,
    route,
    headers,
    params,
    postData,
    timeout = 15000,
  ) {
    const host = zpApi.baseUrl();

    const url = `${host}${route}`;
    const baseHeaders = await zpApi.baseHeaders();
    const requestConfig = {
      headers: !isEmptyObj(headers)
        ? {...baseHeaders, ...headers}
        : baseHeaders,
       
    };

    if (params) {
      requestConfig.params = params;
    }

    http.create();
    http.defaults.timeout = timeout;

    console.log('##############3 axios ############## ');
    console.log(
      requestType,
      route,
      headers,
      params,
      postData,
      requestType,
      requestConfig,
    );
    console.log('##############3 axios ############## ');
    // return false;

    if (requestType === 'get' || requestType === 'delete') {
      return http[requestType](url, requestConfig)
        .then(async response => {
          return response;
        })
        .catch(error => {
          return Promise.reject(error);
        });
    }
    if (requestType === 'post' || requestType === 'put') {
      return http[requestType](url, postData, requestConfig)
        .then(async response => {
          return response.data;
        })
        .catch(error => {
          console.log('error', error);
          return Promise.reject(error);
        });
    }
  }
}



