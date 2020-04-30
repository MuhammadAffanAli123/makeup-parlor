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
 
<View   style={{flex:1,borderColor:"white" ,backgroundColor:"white", marginTop:"10%"} } >
          <Image source={require('../images/1c.png')}
           style={{width:370,height:300,marginTop:4,marginLeft:19 ,  paddingTop:"3%"}}/>
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
          
                </View>
</ScrollView>
   
       
 </View>
        
     

     
    );
  }



export default Home
