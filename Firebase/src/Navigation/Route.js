import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { Component } from 'react';
import Login from '../FirebaseAuthication/Login';
import Register from '../FirebaseAuthication/Register';
import ListContentfile from '../ListContent/ListContentfile';
import RealTimeDatabaseInsert from '../Firebase RealTimeDatabase/RealTimeDatabaseInsert';
import RealTimedataDisplayData from '../Firebase RealTimeDatabase/RealTimedataDisplayData';
import RealTImeDatabaseUpdatedata from '../Firebase RealTimeDatabase/RealTImeDatabaseUpdatedata';
import firebasecloudstoreinsert from '../Firebasecloudstore/firebasecloudstoreinsert';
const RootStack = createNativeStackNavigator();
export default class Route extends Component {
  render() {
    return (
      <NavigationContainer>
        <RootStack.Navigator initialRouteName='ListContentfile'>
          <RootStack.Screen name='Login' component={Login}  options={{headerShown:false}}  />
          <RootStack.Screen name='Register' component={Register}  />
          <RootStack.Screen name='ListContentfile' component={ListContentfile}  />
          <RootStack.Screen name='RealTimeDatabaseInsert' component={RealTimeDatabaseInsert}  />
          <RootStack.Screen name='RealTimedataDisplayData' component={RealTimedataDisplayData}/>  
          <RootStack.Screen name='RealTImeDatabaseUpdatedata' component={RealTImeDatabaseUpdatedata}/>  
          <RootStack.Screen name='firebasecloudstoreinsert' component={firebasecloudstoreinsert}/>  
           
        </RootStack.Navigator>
      </NavigationContainer>
    )
  }
}