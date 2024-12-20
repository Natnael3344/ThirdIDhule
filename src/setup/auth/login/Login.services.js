// @flow 

import axios from 'axios';
import zpApi, { api,config } from '../../../api/Api';
import DeviceInfo from 'react-native-device-info';
const VERIFY_URL = 'https://smarttrack.thirdi.app/api/app/session/login';
export const loginService = {
    login
};


/*----- Login Services Start -----*/
async function login(values) {
    const deviceid = DeviceInfo.getUniqueId();
    const fcmid = '...'; // Obtain FCM ID using your FCM implementation
    const myVersion = DeviceInfo.getVersion();
    const versionos = DeviceInfo.getSystemVersion();
    const mobcompany = DeviceInfo.getManufacturer();
    const model = DeviceInfo.getModel();
    const data = Object.assign({}, {
        username: values.number,
             password: values.password,
             device_id: deviceid,
             fcm_id: '',
             app_version: myVersion,
             os_version: versionos,
             company: mobcompany,
             model: model,
        // "password": values.password,   
    })
    
    try {
        
        const res = await zpApi.post(`${api}${config.endpoint.loginUrl}`, null, null, data);
    
        return res;
    } catch (error) {
        return await Promise.reject(error);
    }

}

/*----- Login Services End -----*/
