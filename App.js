/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import LoginScreen from './src/setup/auth/login/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import ForgotPassword from './src/setup/auth/forgot-password/ForgotPassword';
import Dashboard from './src/screens/Dashboard';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerMain from './src/screens/DrawerMain';
import HomeScreen from './src/screens/HomeScreen';
import AppBar from './src/screens/AppBar';
import MapRoute from './src/screens/MapRoute';
import ActivateQR from './src/screens/ActivateQR';
import TourDairy from './src/screens/TourDairy';
import PhoneInfo from './src/screens/PhoneInfo';
import { Provider } from 'react-redux';
import store, { persistor } from './src/config/Store';
import { PersistGate } from 'redux-persist/integration/react';
import ActivityLoader from './src/components/loader/ActivityLoader';
import { useStore } from "react-redux"; 
import { NativeBaseProvider, extendTheme } from 'native-base';
import Router from './src/setup/routes-manager/RouteNavigation';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const newColorTheme = {
  brand: {
    900: "#8287af",
    800: "#7c83db",
    700: "#b3bef6",
  },
};
const theme = extendTheme({ colors: newColorTheme });
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityLoader />} persistor={persistor}>
      <NativeBaseProvider theme={theme}>
    <StatusBar hidden />
  
    
    <Router />
    </NativeBaseProvider>
    </PersistGate>
    </Provider>
  );
};

export default App;