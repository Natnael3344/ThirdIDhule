import { connect } from "react-redux";

const { useNavigation } = require("@react-navigation/native");
const { useEffect } = require("react");
const { useState } = require("react");
const { default: zpApi } = require("../../api/Api");
const { api } = require("../../api/Api");
const { config } = require("../../api/Api");
const { createStackNavigator } = require("@react-navigation/stack");
const { TouchableOpacity } = require("react-native-gesture-handler");
const { Image } = require("react-native-svg");
const { default: Dashboard } = require("../../screens/Dashboard");
const { LogoTitle } = require("./AppStack");
const Stack = createStackNavigator();
const BottomTabsFirstStack =  (props) => {
    const navigation = useNavigation();
    const [initialRoute, setInitialRoute] = useState(null);
    useEffect(() => {
    const fetchData = async () => {
      try {
      let user_id;
      let token_id;
      let token_value;
      if(props.user?.data !== undefined)
    {
      token_value = props.user.data.token_value;
      user_id = props.user.data.user_id;
      token_id = props.user.data.token_id;
    }
    const data = Object.assign({}, {
      user_id: user_id,
      token_id: token_id,
      token_value: token_value
    })
    
    const res = await zpApi.post(`${api}${config.endpoint.menuUrl}`, null, null, data);
    console.log(res.authentication);
    setInitialRoute(res.authentication ? 'dashboard' : 'attach');
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle error state or log error information
  }
    }
    fetchData();
    }, [props]);
    if (initialRoute === null) {
      // You can return a loading indicator or handle the loading state in another way
      return null;
    }
  
  
    
  // console.log(res);
    return (
      <Stack.Navigator
      initialRouteName={initialRoute}
        screenOptions={{
          headerStyle: {
            backgroundColor: '#005a64',
          },
          headerLeft: () => (
            <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{marginLeft: 15}}>
            <Image
              source={require('../../assets/png/arrow-back.png')}
              resizeMode="contain"
              style={{width: 25, height: 25}}
            />
          </TouchableOpacity>
            
          ),
          headerTintColor: 'white',
          headerTitleAlign: 'center',
        }}>
        
        <Stack.Screen
          name="dashboard"
          component={Dashboard}
          options={{
            header: ({navigation, route, options}) => {
              return <LogoTitle title={route.name} navigation={navigation} />;
            },
            title: 'Scan QR Code', //Set Header Title
          }}
        />
       
        {/* <Stack.Screen
          name="checkIn"
          component={CheckIn}
          options={{
            title: 'Scan QR Code', //Set Header Title
          }}
        />
          
           <Stack.Screen
          name="attach"
          component={UserImages}
          options={{
            title: 'Attach Image', //Set Header Title
          }}
        /> */}
      </Stack.Navigator>
    );
  };
  const mapStateToProps = function(state) {
    return {
      user: state.login.user,
    };
  };
  export default connect(mapStateToProps)(BottomTabsFirstStack);