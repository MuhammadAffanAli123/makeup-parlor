import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Platform,
  Text,
} from 'react-native';
import {Icon , Root} from 'native-base'
import {createAppContainer , createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import  Home from './src/screen/Home';
import Service from './src/screen/services';
import OrderHistory from './src/screen/orderHistory';
import CustomSidebarMenu from './CustomSidebarMenu';
import Splash from './src/screen/Splash'
import Login from './src/screen/login'
import  Signup from './src/screen/Signup'
import Appoint from './src/screen/appoint'
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';



const App = () => {
  return (
   <Root>
     <AppContainer/>
     {/* <OrderHistory/> */}
   </Root>
  )
}


global.currentScreenIndex = 0;

class NavigationDrawerStructure extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Image
            source={require('./images/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}


const HomeStack = createStackNavigator({
  Home: {
    screen:  Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#fb3e6c',
      },
      headerTintColor: '#fff',
    }),
  },
});


const ServiceStack = createStackNavigator({
  Services: {
    screen: Service,
    navigationOptions: ({ navigation }) => ({
      title: 'Services',
     
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#fb3e6c',
      },
      headerTintColor: '#fff',
    }),
  },
});

const  AppointStack = createStackNavigator({
  Appoints: {
    screen: Appoint,
    navigationOptions: ({ navigation }) => ({
      title: '  Upcoming APPOINTMENT ',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#fb3e6c',
      },
      headerTintColor: '#fff',
    }),
  },
});

const OrderHistoryStack = createStackNavigator({
  upcomings: {
    screen: OrderHistory,
    navigationOptions: ({ navigation }) => ({
      title: 'Order History',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: 'white',
        color:"black"
      },
      headerTintColor: 'black',
    }),
  },
});
const DrawerNavigatorExample = createDrawerNavigator(
  {
    homes: {
      screen: HomeStack,
      navigationOptions: {
        drawerIcon:(
          <Icon  name='home'/>
         )
      },
    },
    ServiceLink: {
      screen: ServiceStack,
      navigationOptions: {
        drawerIcon:(
          <Icon  name='home'/>
         )
      },
    },
    OrderLink: {
      screen: OrderHistoryStack ,
      navigationOptions: {
        drawerIcon:(
          <Icon style={{ color:'#333333', fontSize:20}} name='home'/>
         )
      },
    },
    UpcomingLink: {
      screen:AppointStack,
      navigationOptions: {
        drawerIcon:(
          <Icon  name='home'/>
         )
      },
    },
    AddressLink: {
      screen: AppointStack,
      navigationOptions: {
        drawerIcon:(
          <Icon  name='home'/>
         )
      },
    },
    InviteLink: {
      screen: AppointStack,
      navigationOptions: {
        drawerIcon:(
          <Icon  name='home'/>
         )
      },
    },
    ContactLink: {
      screen: OrderHistoryStack ,
      navigationOptions: {
        drawerIcon:(
          <Icon style={{ color:'#333333', fontSize:20}} name='home'/>
         )
      },
    },
  },
  {
    initialRouteName: 'homes',
    contentComponent: CustomSidebarMenu,
  drawerPosition:'left',
    drawerWidth: Dimensions.get('window').width - 60,
  }
);

const switchNavigator = createSwitchNavigator({
  Splash:{
    screen:Splash,
    
  },
  Login :{
    screen:Login
  } ,
  App: DrawerNavigatorExample,
 
},
{
  initialRouteName:'Splash'
}
)

// const AppContainer = createAppContainer(DrawerNavigatorExample);
const AppContainer = createAppContainer(switchNavigator);




export default App
