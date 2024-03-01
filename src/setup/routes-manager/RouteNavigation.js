import React from 'react';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';

import { connect } from 'react-redux';
import { navigationRef } from './RootNavigation';
import { AuthStack } from './AuthStack';
import AppStack from './AppStack';




function Router(props) {
  let token;
 if(props.user?.data !== undefined)
  {
    token = props.user.data.token_value;
  }
 console.log('token',token);
  return (
    <NavigationContainer ref={navigationRef}>
     {token ? <AppStack /> : <AuthStack  />} 
    {/* {   <AuthStack /> }   */}
    </NavigationContainer>
  );
}

const mapStateToProps = function(state) {
 
  return {
     user : state.login.user,
     loadingSignOut : state,
    //  user : state.otp.user,
    //  loadingSignOut : state.otp.loadingSignOut,
  }
}

export default connect(mapStateToProps)(Router);