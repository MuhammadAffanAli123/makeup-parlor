import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text } from 'react-native';
const OrderHistory= () => {
  return (
    <View style={styles.MainContainer}>
      <Text style={{ fontSize: 23 }}> OrderHistoryment </Text>
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


export default  OrderHistory
