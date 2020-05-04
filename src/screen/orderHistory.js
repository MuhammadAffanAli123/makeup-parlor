import React, { Component } from 'react';
import { Container, Content, Grid, Row, Col, Tabs, Left, Right } from 'native-base'
import { Card, ListItem, Button, Image, Overlay } from 'react-native-elements'
import { Icon } from "native-base";
//import react in our code.
import { StyleSheet, View, Text } from 'react-native';
const OrderHistory = () => {
  return (
    <View style={styles.MainContainer}>
      <View style={{ marginTop: "10%", marginLeft: "10%",marginRight:"10%", }}>
        <Text style={{ fontSize: 23  , fontWeight: "bold" , textAlign:"center"}}> Past Orders </Text>
      </View>
      {/* <View style={{ marginTop: "5%", marginLeft: "10%",marginRight:"10%", borderColor: "white", borderWidth: 1, backgroundColor: "white" }}> */}
        <Card
          containerStyle={{ borderColor:"white" , borderWidth:3  ,  marginTop:"5%" , height:"18%"}}
>
          
          <Row>
            <Col >
              <Text style={{ fontWeight: "bold" , color:"#fb3e6c",fontSize:22 , marginTop:"5%"  }}>FULL HAND WAX</Text>
            </Col>
            <Col >
              <Text style={{ fontWeight: "bold" ,fontSize:20 , marginTop:"7%" , marginLeft:"40%" }}>Rs 650.50</Text>
            </Col>
          </Row>

          <Row style={{marginTop:"15%"}}>
            <Col >
            <Text style={{ fontSize:15 , marginTop:"5%"  }}>Warning</Text>
            </Col>
            
            <Col >
            <Text style={{fontSize:15 , marginTop:"13%" , marginLeft:"40%" , color:"white",backgroundColor:"#fb3e6c",  textAlign:"center"}}>Reorder</Text>
           
            </Col>
          </Row>
          
          <Row style={{marginTop:"10%"}}>
            <Col >
            <Text style={{  fontSize:15 ,   }}>2020 04 06 11:00pm</Text>
            </Col>
           
          </Row>
          
        </Card>
        <Card
          containerStyle={{ borderColor:"white" , marginTop:"5%" , borderWidth:3  ,  height:"18%"}}
>
          
          <Row>
            <Col >
              <Text style={{ fontWeight: "bold" , color:"#fb3e6c",fontSize:22 , marginTop:"5%"  }}>FULL HAND WAX</Text>
            </Col>
            <Col >
              <Text style={{ fontWeight: "bold" ,fontSize:20 , marginTop:"7%" , marginLeft:"40%" }}>Rs 650.50</Text>
            </Col>
          </Row>

          <Row style={{marginTop:"15%"}}>
            <Col >
            <Text style={{ fontSize:15 , marginTop:"5%"  }}>Warning</Text>
            </Col>
            
            <Col >
            <Text style={{fontSize:15 , marginTop:"13%" , marginLeft:"40%" , color:"white",backgroundColor:"#fb3e6c",  textAlign:"center"}}>Reorder</Text>
           
            </Col>
          </Row>
          
          <Row style={{marginTop:"10%"}}>
            <Col >
            <Text style={{  fontSize:15 ,   }}>2020 04 06 11:00pm</Text>
            </Col>
           
          </Row>
          
        </Card>
      {/* </View> */}
    </View>
  );
}


const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: "#ededed"
  },
});


export default OrderHistory
