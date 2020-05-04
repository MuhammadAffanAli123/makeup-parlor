import React,{useState, useEffect} from 'react'
import { Container, Content, Grid, Col, Row, Item, Input, Icon, Button, Text } from 'native-base';
import { Image, StatusBar, StyleSheet, Keyboard, View, TouchableOpacity } from 'react-native';
import { UIActivityIndicator, BallIndicator } from 'react-native-indicators';
import { TextInput } from 'react-native-paper'
import AwesomeAlert from 'react-native-awesome-alerts';
 const Login = (props) => {
  
  const [ state, setState ] = useState({
    email:'',
    password:'',
    emailStyleError:false,
    passwordStyleError:false,
    buttonAction:false,
    showAlert: false
  }) 
  const [ load, setLoad ] = useState(false)
  const { email, password, emailStyleError, passwordStyleError, buttonAction  ,  showAlert} = state
  
  showAlert1 = () => {
   
    setState({
      showAlert: true
    });

    setTimeout(() => {
      props.navigation.navigate('Home')
      // setState({
      //   showAlert: false
      // });
      },1500)
 
    
  };
 
  hideAlert = () => {
  
  //  setState({
  //     showAlert: false
  //   });
    
  };
  

  return (
    <Container style={{backgroundColor:'#ededed'}}>
      <StatusBar backgroundColor="#fb3e6c" barStyle="default" />
    <Content >
    
  <View style={{marginTop:"20%" , width:"80%" , marginLeft:"10%" , backgroundColor:'#ededed'}}>
    <Text style={{fontWeight:"bold" , fontSize:35 ,  marginLeft:"25%" ,}}>
      Welcome
    </Text>
    </View>
    <View style={{width:"80%" ,marginTop:"6%" , marginLeft:"10%",  backgroundColor:'#ededed'}}>
    <Text style={{ fontSize:15 ,  marginLeft:"20%" , marginRight:"15%",justifyContent:"center" , alignItems:"center"}}>
     lorem ipsum is simply dummy text of the printing
    </Text>
    
  </View>
  
<View  style={{marginTop:"2%" , width:"80%" , marginLeft:"5%" , backgroundColor:'#ededed'}}>
<TextInput
     style={{marginTop:"2%" , width:"95%" , marginLeft:"7%" , backgroundColor:'#ededed'}}
    label="Email"
  // underlineColor='#18e6d1'
  value={email} 
  onChangeText={val => setState({...state, email:val})}
    />
<Row></Row>
<TextInput
    style={{marginTop:"2%" , width:"95%" , marginLeft:"7%" , backgroundColor:'#ededed'}}
    label="Password"
  secureTextEntry={true}
   value={password} 
  onChangeText={val => setState({...state,password:val})}
    />
     <Row style={{marginTop:3 ,marginLeft:'10%'}}>
        <Col style={{marginLeft:'0%' , marginBottom:20}}>
          <TouchableOpacity onPress={() => props.navigation.navigate('pass')}>
        <Text style={{ fontSize:12,color:'#fb3e6c'  }} onPress={() => props.navigation.navigate('pass')}>Forgot Password?</Text>
        </TouchableOpacity>
        </Col>
        <Col style={{ marginBottom:20}}>
          <TouchableOpacity onPress={() => props.navigation.navigate('pass')}>
        <Text style={{ fontSize:12,marginLeft:'37%' ,color:'#fb3e6c'  }} >Invalid Password</Text>
        </TouchableOpacity>
        </Col>
      </Row>
     <Row style={{marginTop:10}}>
        <Col style={{alignItems:'center'}}>
          {buttonAction === false ?
        <Button  style={{width:'70%',marginLeft:"10%",borderRadius:25,backgroundColor:"#fb3e6c", justifyContent:'center', borderColor:'black'}} onPress={showAlert1}  disabled={buttonAction}>
            <Text style={{ color:'white',fontSize:18,fontWeight:"bold"}}>Login</Text>
          </Button>
          :
          <UIActivityIndicator color='white'/>
          }
        </Col>
      </Row>
      <View style={{  marginTop:"3%" , marginLeft:"40%"   ,   }}  >
  <Text   style={{  marginTop:"3%" , marginBottom:"3%" , fontSize:25  , width:"55%" , borderBottomColor:"#fb3e6c" , borderBottomWidth: 5}}>
  SIGN UP
  </Text>
</View>
</View>

<View  style={{width:"100%" , marginTop:"20%", backgroundColor:"white" , heigth:"90%" }}>
  <Text style={{  marginTop:"3%" , marginBottom:"3%"  , marginLeft:"10%"}}>
  <Icon style={{color:"gray"}}  name="md-card" size={25}/> Send Feedback
  </Text>
</View>

<View  style={{width:"100%" , marginTop:"2%", backgroundColor:"white" , heigth:"90%" }}>
  <Text style={{  marginTop:"3%" , marginBottom:"3%"  , marginLeft:"10%"}}>
  <Icon style={{color:"gray"}}  name="md-alert" size={25}/>  About
  </Text>
</View>
   
    
    
      
</Content>

<AwesomeAlert
          show={showAlert}
          
          message="LOGIN SUCESSFULLY !!"
          messageStyle={{  fontSize:25 , fontWeight:"bold" , marginTop:"30%"}}
          contentContainerStyle={{backgroundColor:"#fb3e6c" ,  width:"90%" , height:"40%" , borderRadius: 20 }}
        
        //  contentStyle={{fontSize:35 , fontWeight:"bold" , color:"white"}}
          // onCancelPressed={() => {
          //   props.navigation.navigate('Home')
            
          // }}
          // onConfirmPressed={() => {
          //   props.navigation.navigate('Home')
            
          // }}
        />

    </Container>
   

  )



}

const styles = StyleSheet.create({
  container: {

    justifyContent: 'center',
    alignItems: 'center',
    margin: 50,
  },

  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    
    borderBottomWidth: 7,
    borderBottomColor: '#34aeeb',
    height: "9%",
    width: "75%",
    borderRadius: 12,
    fontSize: 100,
    marginTop: 12,
    marginLeft:"0%"
  },

  ImageStyle: {
    padding:15,
    marginTop: 12,
    height: 25,
    width: 20,
    resizeMode: 'stretch',
    alignItems: 'center'
  },

})
export default  Login