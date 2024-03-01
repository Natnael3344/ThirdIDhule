import React from 'react';
import { connect } from 'react-redux';
import {Image, View, Text, Alert,TouchableOpacity} from 'react-native';


import drawerHeaderStyle from './DrawerHeaderStyle';

const DrawerHeader = props => {

  let name;
  if(props.user?.data !== undefined)
  {
    name = props.user.data.name;
  }
  
  return (
    <View>
      {/* <View style={drawerHeaderStyle.imageContainer}>
        <Image style={drawerHeaderStyle.imageStyle} source={Logo} />
      </View> */}
      <View style={drawerHeaderStyle.detailsContainer}>
        <Text style={drawerHeaderStyle.nameTextStyle}>{name}</Text>
      </View>
    </View>
  );
};



const mapStateToProps = function(state) {
  return {
     user : state.login.user
  }
}

export default connect(mapStateToProps)(DrawerHeader);