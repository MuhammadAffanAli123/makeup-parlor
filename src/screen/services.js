//This is an example code for Navigation Drawer with Custom Side bar//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text } from 'react-native';
// import all basic components

 const Service = () => {
  //Screen1 Comrender() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 23 }}> Services </Text>
      </View>
    );
  }


const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
});

export default Service
