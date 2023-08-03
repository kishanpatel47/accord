import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../Component/Login';
import Register from '../Component/Register';
const RootStack = createNativeStackNavigator();
const Route = () => {
  return (
   <NavigationContainer>
<RootStack.Navigator>
    <RootStack.Screen name='Login' component={Login}/>
    <RootStack.Screen name='Register' component={Register}/>
        
</RootStack.Navigator>    
   </NavigationContainer>
  )
}

export default Route