import React, { useState } from 'react';
import { View, Text, Button, ScrollView, TouchableOpacity, ListView, StyleSheet,Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import DropDownButton from '../components/dropDown';
import { Field, reduxForm } from 'redux-form';
import globalStyles from '../assets/css/styles';
import { renderTextField } from '../components/renderInput';
import { connect, useDispatch, useSelector } from 'react-redux';
const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];
const Dashboard = (props) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const handleDropdownChange = (newValue) => {
    setValue(newValue);
  };
  const {navigation } = props;
  navigateToCheckInScreen = () => {
    navigation.navigate("checkIn");
  }
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, padding: 10 }}>
        <View style={{ flex: 1, marginTop: 10 }}>
          <View style={{flexDirection:'row'}}>
            <View style={{flex:1,marginRight:10}}>
            <DropDownButton
        data={data}
        placeholder="Select Police Station..."
        value={value}
        onChange={handleDropdownChange}
      />
            </View>
            <View style={{flex:1}}>
            <DropDownButton
        data={data}
        placeholder="-- No Data --"
        value={value}
        onChange={handleDropdownChange}
      />
            </View>
      
          </View>
          <View style={{width: '100%',marginTop:20}}>
              <Field
                name="number"
                label="Enter PCR No." 
                component={renderTextField}
                keyboardType={'phone-pad'}
                inputStyle={globalStyles.AuthTextInput}
              />
            </View>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <TouchableOpacity style={[styles.button,{backgroundColor:'#c0d2d4'}]} onPress={() => { /* handle bt_placesvisited press */ }}>
              <Text style={styles.buttonText}>Scan QR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,{backgroundColor:'#c0d2d4'}]} onPress={() => { /* handle bt_placesvisited press */ }}>
              <Text style={styles.buttonText}>Places Visited</Text>
            </TouchableOpacity>
          </View>
          <Text
            style={styles.qrLocationText}
            numberOfLines={10}
            ellipsizeMode="tail"
          />
          {/* <ListView
            // Set ListView properties and data here
            // dataSource={this.state.dataSource}
            // renderRow={(rowData) => <Text>{rowData}</Text>}
            style={styles.listView}
          /> */}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = {
  button: {
    flex: 1,
    marginHorizontal: 5,
    marginBottom: 5,
    backgroundColor: '#E0E0E0', // Set your button background color
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: '#0a5559', // Set your button text color
    fontSize: 20,
    textAlign: 'center',
  },
  qrLocationText: {
    marginVertical: 10,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
    color: '#000', // Set your text color
    // Set other text properties as needed
  },
  listView: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    // Set other ListView properties as needed
  },
  noQrText: {
    alignSelf: 'center',
    marginBottom: 30,
    fontSize: 20,
    color: '#000', // Set your text color
  }
  
};
const mapStateToPros = (state) => {
  return ({ 
      user: state.login,
      loading : state.login.loading,
  })
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//       login: (values) => dispatch(loginActions.login(values)),
//       socialLogin : (socialData,data) => dispatch(loginActions.socialLogin(socialData,data)),
     
//   }
// }

DashBoard = connect(
  mapStateToPros,
  // mapDispatchToProps
)(Dashboard)



export default reduxForm({
  form: 'DashBoard',
  // validate
  
})(DashBoard);
// export default Dashboard;
