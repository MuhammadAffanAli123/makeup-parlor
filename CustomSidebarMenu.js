import React, { Component } from 'react';
import { View, StyleSheet, Text,ImageBackground , ScrollView} from 'react-native';
import { Icon } from 'react-native-elements';

export default class CustomSidebarMenu extends Component {
  constructor() {
    super();
    
    this.items = [
      {
        navOptionThumb: 'home',
        navOptionName: 'Home',
        screenToNavigate: 'homes',
      },
      {
        navOptionThumb: 'memory',
        navOptionName: 'SERVICES',
        screenToNavigate: 'ServiceLink',
      },
      {
        navOptionThumb: 'assignment',
        navOptionName: 'ORDER HISTORY',
        screenToNavigate: 'OrderLink',
      },
      {
        navOptionThumb: 'business',
        navOptionName: 'UPCOMING APPOINMENTS',
        screenToNavigate: 'UpcomingLink',
      },
      {
        navOptionThumb: 'place',
        navOptionName: 'MY ADDRESS',
        screenToNavigate: 'AddressLink',
      },
      {
        navOptionThumb: 'image',
        navOptionName: 'INVITE FRIENDS',
        screenToNavigate: 'InviteLink',
      },
      {
        navOptionThumb: 'call',
        navOptionName: 'CONTACT US',
        screenToNavigate: 'ContactLink',
      },
    ];
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.sideMenuContainer}>
       <View style={{backgroundColor:"#fb3e6c" , height: '25%', width:"100%" }} >
       <ImageBackground source={require('./src/images/bg.png')} style={{ flex: 1,
      resizeMode: "cover",
      justifyContent: "center"}}>
            <Text style={{  color:"white" , paddingLeft:"10%" , paddingTop:"45%"}}>Sara Khan</Text>
    </ImageBackground>
      
       </View>
        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: '#e2e2e2',
            marginTop: 15,
          }}
        />
        {/*Setting up Navigation Options from option array using loop*/}

        
        <View style={{ width: '100%' }}>
          {this.items.map((item, key) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: global.currentScreenIndex === key ? '#e0dbdb' : '#ffffff',
              }}
              key={key}>
              <View style={{ marginRight: 10, marginLeft: 20 }}>
                <Icon name={item.navOptionThumb} size={25} color="#fb3e6c" />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  marginLeft:"10%",
                  fontWeight:"bold",
                  color: global.currentScreenIndex === key ? 'red' : 'black',
                }}
                onPress={() => {
                  global.currentScreenIndex = key;
                  this.props.navigation.navigate(item.screenToNavigate);
                }}>
                {item.navOptionName}
              </Text>
            </View>
          ))}
        </View>
        <View style={{  backgroundColor: '#f6f6f6', height: '25%', width:"100%" }} >
       <Text style={{  color:"black" , paddingLeft:"10%" , paddingTop:"50%"}}>LOGOUT</Text>
       </View>
      </View>
      </ScrollView>
      
    );
  }
}
const styles = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
    paddingTop: 0,
  },
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 150,
    height: 150,
    marginTop: 20,
    borderRadius: 150 / 2,
  },
});