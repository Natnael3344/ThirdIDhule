import React from 'react';
import { connect, useSelector } from 'react-redux';
import {Image, View, Text, Alert,TouchableOpacity} from 'react-native';

import DrawerFooterStyle from './DrawerFooterStyle';
import { DrawerActions } from '@react-navigation/native';

const DrawerFooter = props => {
  
  return (
    <View style={DrawerFooterStyle.component}>
      {/* <View style={{paddingHorizontal: 20}}>
        <CustomButton
          text={translations.logout}
          onPress={() =>
            Alert.alert(
              translations.logout,
              translations.alert,
              [
                {
                  text: translations.cancel,
                  onPress: () => {
                    props.navigation.dispatch(DrawerActions.closeDrawer());
                  },
                },
                {
                  text: translations.confirm,
                  onPress: () => props.logoutUser(),
                },
              ],
              {cancelable: false},
            )
          }
        />
      </View> */}
      <Text style={DrawerFooterStyle.RightsTextStyle}>
      © All rights are reserved with Adivid Technologies Pvt. Ltd.
      </Text>
    </View>
  );
};



const mapStateToPros = (state) => {
  return ({ 
      user : state.login.user,
      loading : state.login.loading 
  })
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//       logoutUser: (values) => dispatch(OTPActions.logout()),
    
//   }
// }

export default connect(
  mapStateToPros,
  // mapDispatchToProps
)(DrawerFooter)
