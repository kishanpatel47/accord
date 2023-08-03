import { StyleSheet} from 'react-native'
import React, { Component } from 'react'
import {SafeAreaView} from 'react-native-safe-area-context';
import {Divider, StatusBar, useColorMode, View,Text,TextField} from 'native-base';
import { CustomTheme } from './theme'

 import { Header } from './Component/Header'
 const Login =()=> {
    const {colorMode} = useColorMode();
    const bgColor = colorMode === 'dark' ? 'red' :'#ff00ff';
    const blue = colorMode === 'dark' ? 'blue' : '#000080';
    const placeholderTextColor =colorMode === 'dark' ? 'red' :'white'  
    const textcolor =colorMode === 'dark' ? 'blue' :'red'  
    return (
      <SafeAreaView style={[styles.container, {backgroundColor: bgColor}]}>
        <StatusBar
          barStyle={colorMode === 'dark' ? 'light-content' : 'dark-content'}
          translucent
          backgroundColor="transparent"
        />
       
        <Header />
        <Divider />
        <View>
         <TextField style={{backgroundColor:placeholderTextColor ,color:textcolor}} margin={20} placeholder="Enter the Email"  placeholderTextColor={textcolor}/>
        </View>
      </SafeAreaView>
    );
  }
  export default Login;
const styles =StyleSheet.create({
container :{
    flex:1
}
})