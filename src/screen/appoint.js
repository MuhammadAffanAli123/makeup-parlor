import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text } from 'react-native';
const Appoint= () => {
  return (
    <View style={styles.MainContainer}>
      <Text style={{ fontSize: 23 }}> Appointment </Text>
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


export default  Appoint
