import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Firestoreinsert from "./src/Component/firebase/Firestore/Firestoreinsert";

const RootStack = createNativeStackNavigator();


const Rootfile =() =>{
<NavigationContainer>
<RootStack.Navigator initialRouteName="Firestoreinsert">
  <RootStack.Screen name="Firestoreinsert" component={Firestoreinsert}></RootStack.Screen>
</RootStack.Navigator>
</NavigationContainer>
}
export default Rootfile;