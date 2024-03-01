import React from 'react';
import { View, Text } from 'react-native';
import {api, config } from '../../../api/Api';
import WebView from 'react-native-webview';

const ForgotPassword = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <View
        style={{
          height: 55,
          backgroundColor: '#005a64', // Set the color to your colorPrimaryDark
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
          Forgot Password
        </Text>
      </View> */}

      <WebView
        source={{ uri: `${api}${config.endpoint.forgotPassword}`}} // Set the webview URL
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default  ForgotPassword;
