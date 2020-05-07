//This is an example code for Navigation Drawer with Custom Side bar//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet,TouchableOpacity, View,Image, Text , ScrollView} from 'react-native';
import { Container, Content, Grid, Row, Col, Tabs, Left, Right } from 'native-base'
// import { Card, ListItem, Button, Image, Overlay } from 'react-native-elements'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
// import all basic components

 const Home = () => {
  //Screen1 Comrender() {
    return (
      
 

 <View style={{flex:1,backgroundColor:"#ededed"  }} >
    <Text  style={{marginTop:"10%" , marginLeft:"10%" , backgroundColor:"#ededed", fontSize:35, fontWeight:"bold"}}>Beauty Tips</Text>
<ScrollView style={{backgroundColor:"#ededed"}}
>
 
{/* <View   style={{flex:1,borderColor:"white" ,backgroundColor:"white", marginTop:"10%" , borderRadius:20 ,marginLeft:"2%" , marginRight:"2%" } } >
          <Image source={require('../images/1c.png' )}
           style={{width:370,height:300,marginTop:4,marginLeft:10,marginRight:10 ,  paddingTop:"3%" ,  borderRadius : 20 , marginTop:10}}/>
           <Text style={{marginTop:20,marginLeft:19,width:370, fontWeight:"bold", paddingBottom:"3%" }}>lorem ipsum new wonderful Application </Text>
           
                </View>

                <View   style={{flex:1,borderColor:"red" ,backgroundColor:"white", marginTop:"9%"}} >
                  
          <Image source={require('../images/1c.png')}
           style={{width:370,height:300,marginTop:4,marginLeft:19 , paddingTop:"3%"}}/>
           <Text style={{marginTop:20,marginLeft:19,width:370  , fontWeight:"bold" , paddingBottom:"3%" }}>lorem ipsum new wonderful Application </Text>
          
                </View>
                
                <View   style={{flex:1,borderColor:"red" , backgroundColor:"white", marginTop:"9%"}} >
          <Image source={require('../images/1c.png')}
           style={{width:370,height:300,marginTop:4,marginLeft:19 ,  paddingTop:"3%"}}/>
           <Text style={{marginTop:20,marginLeft:19,width:370, fontWeight:"bold" , paddingBottom:20}}>lorem ipsum new wonderful Application </Text>
          
                </View> */}
                <Card
  image={require('../images/1c.png' )}>
  <Text style={{marginBottom: 10}}>
    The idea with React Native Elements is more about component structure than actual design.
  </Text>
  <Button
   title='Click Here'
    buttonStyle={{borderRadius: 0,backgroundColor: '#fb3e6c', marginLeft: 0, marginRight: 0, marginBottom: 0}}
    />
</Card>
<Card
  image={require('../images/1c.png' )}>
  <Text style={{marginBottom: 10}}>
    The idea with React Native Elements is more about component structure than actual design.
  </Text>
  <Button
     title='Click Here'
    buttonStyle={{borderRadius: 0,backgroundColor: '#fb3e6c', marginLeft: 0, marginRight: 0, marginBottom: 0}}
    />
</Card>

                <Card
  image={require('../images/1c.png' )}>
  <Text style={{marginBottom: 10}}>
    The idea with React Native Elements is more about component structure than actual design.
  </Text>
  <Button
    buttonStyle={{borderRadius: 0,backgroundColor: '#fb3e6c', marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Click Here' />
</Card>
</ScrollView>
   
       
 </View>
        
     

     
    );
  }



export default Home
