import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../helper/Pages/Login";
import Register from "../helper/Pages/Register";
import Dashboard from "../helper/Pages/Dashboard";
import Splashscreen from "../helper/Pages/Splashscreen";
import SelectType from "../helper/Pages/SelectType";
const RootStack = createNativeStackNavigator()
const Router = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName="SelectType" >
                <RootStack.Screen name="Splashscreen" component={Splashscreen} options={{ headerShown: false }} />

                <RootStack.Screen name="SelectType" component={SelectType} options={{ headerShown: false }} />
                <RootStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <RootStack.Screen name="Register" component={Register} options={{ headerShown: false }} />
                <RootStack.Screen name="Dashboard" component={Dashboard}></RootStack.Screen>
            </RootStack.Navigator>
        </NavigationContainer>
    )
}
export default Router; 