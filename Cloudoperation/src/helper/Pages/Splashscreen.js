import { Text, View,Image } from 'react-native'
import React, { Component } from 'react'

export default class Splashscreen extends Component {
  constructor(props) {
    super(props);
    this.state ={}
  }
 
 componentDidMount =()=>{
    setTimeout (()=>{
this.props.navigation.navigate('Login')
    },1000)
 }

    render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignSelf:'center'}}>
      <Image  style={{resizeMode:'cover',}} source={require('../../../asstes/Images/firebaselogo.png')}/>     
     
      </View>
    )
  }
}