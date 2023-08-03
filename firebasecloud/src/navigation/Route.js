
import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import FirestoreDisplaydataClassComponent from '../component/firebase/Firestore/FirestoreDisplaydataClassComponent';
import FirestoreUpdatedata from '../component/firebase/Firestore/FirestoreUpdatedata.js';

import RealTimeDatabaseInsert from '../component/firebase/RealTime/RealTimeDatabaseInsert';
import RealTimedataDisplayData from '../component/firebase/RealTime/RealTimedataDisplayData';
import RealTimeDatabaseUpdate from '../component/firebase/RealTime/RealTimeDatabaseUpdate';
import Firestoreinsert from '../component/firebase/Firestore/Firestoreinsert'
import Imageuploaddemo from '../component/firebase/storage/Imageuploaddemo';

import Imagestorage from '../component/firebase/storage/Imagestorage'
import Firestoreinsertdemo from '../component/firebase/Firestore/firestoreinsertdemo';


import App from '../Imagepicker';
export default class Route extends Component {
    render() {
        const RootStack = createNativeStackNavigator();
        return (
            <NavigationContainer>
                <RootStack.Navigator initialRouteName='RealTimedataDisplayData'>


                    {/* firebase firestoredatbaseincloud */}
                    <RootStack.Screen name='Firestoreinsert' component={Firestoreinsert}></RootStack.Screen>
                    <RootStack.Screen name='FirestoreDisplaydataClassComponent' component={FirestoreDisplaydataClassComponent}></RootStack.Screen>
                    <RootStack.Screen name='FirestoreUpdatedata' component={FirestoreUpdatedata}></RootStack.Screen>






                    {/* firebase  in firestoredatbase */}
                    <RootStack.Screen name='RealTimeDatabaseInsert' component={RealTimeDatabaseInsert}></RootStack.Screen>
                    <RootStack.Screen name='RealTimedataDisplayData' component={RealTimedataDisplayData}></RootStack.Screen>

                    <RootStack.Screen name='RealTimeDatabaseUpdate' component={RealTimeDatabaseUpdate}></RootStack.Screen>



                    {/* extra learning screen  */}

                    <RootStack.Screen name='Imagestorage' component={Imagestorage}></RootStack.Screen>


                    <RootStack.Screen name='App' component={App}></RootStack.Screen>

                    <RootStack.Screen name='Imageuploaddemo' component={Imageuploaddemo}></RootStack.Screen>

                    <RootStack.Screen name='Firestoreinsertdemo' component={Firestoreinsertdemo}></RootStack.Screen>







                </RootStack.Navigator>
            </NavigationContainer>
        )
    }
}