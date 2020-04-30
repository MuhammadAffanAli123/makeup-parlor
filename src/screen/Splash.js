import React,{ useEffect, useState} from 'react'
import { StatusBar, Animated, View,  Text, Image, Alert , ImageBackground  } from 'react-native';
import { Container, Content, Grid, Row, Column } from 'native-base'
import { FadeInAnim } from '../componemts/Animate';
import { UIActivityIndicator, BallIndicator } from 'react-native-indicators';


const  Splash = (props) => {

    useEffect(() => {

       
            
                setTimeout(() => {
                props.navigation.navigate('Login')
                },2500)
           

    },[])
    
    
    return(
       

        <View style={{flex:1, backgroundColor:'#fb3e6c', justifyContent:'center'}}>
           
             <ImageBackground source={require('../images/splash.png')} style={{ flex: 1,
      resizeMode: "cover",
      justifyContent: "center"}}>
             <FadeInAnim >
            <View style={{alignItems:'center'}}>
      
        <Text style={{marginBottom:"5%"}}></Text>
          {/* <Image  style={{width:260, height:100}} /> */}
        <BallIndicator color='white' style={{ marginTop:20 }}/>
        </View>
      
        </FadeInAnim>
    </ImageBackground>
       
    </View>
    );
}

export default Splash
