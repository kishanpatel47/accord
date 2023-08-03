import { Text, TouchableOpacity, View, Dimensions, ScrollView, Button } from 'react-native'
import React, { Component } from 'react'

export default class ListContentfile extends Component {
   render() {
      return (
         <ScrollView>
            <View style={{ height: Dimensions.get('screen').height / 1.2, flexDirection: 'column', backgroundColor: 'red', alignItems: 'center' }}>
               <TouchableOpacity style={{marginTop:5}} onPress={()=>this.props.navigation.navigate('Login')}>
                  <View style={{ backgroundColor: 'grey', width: Dimensions.get('screen').width / 1.2, borderRadius: 20, padding: 10 }}>
                     <Text style={{ color: 'white' }}> Firebase   Authication</Text>
                  </View>
               </TouchableOpacity>
               <TouchableOpacity style={{marginTop:5}} onPress={()=>this.props.navigation.navigate('RealTimeDatabaseInsert')}>
                  <View style={{ backgroundColor: 'grey', width: Dimensions.get('screen').width / 1.2, borderRadius: 20, padding: 10 }}>
                     <Text style={{ color: 'white' }}> Real Time Database</Text>
                  </View>
               </TouchableOpacity>
               <TouchableOpacity style={{marginTop:5}}>
                  <View style={{ backgroundColor: 'grey', width: Dimensions.get('screen').width / 1.2, borderRadius: 20, padding: 10 }}>
                     <Text style={{ color: 'white' }}> Firebase   Cloud</Text>
                  </View>
               </TouchableOpacity>
               <TouchableOpacity style={{marginTop:5}}>
                  <View style={{ backgroundColor: 'grey', width: Dimensions.get('screen').width / 1.2, borderRadius: 20, padding: 10 }}>
                     <Text style={{ color: 'white' }}> cloud Firestore</Text>
                  </View>
               </TouchableOpacity>
               <TouchableOpacity style={{marginTop:5}} onPress={()=>{this.props.navigation.navigate('RealTimedataDisplayData')}}>
                  <View style={{ backgroundColor: 'grey', width: Dimensions.get('screen').width / 1.2, borderRadius: 20, padding: 10 }}>
                     <Text style={{ color: 'white' }}> Firebase RealTime Display Data</Text>
                  </View>
               </TouchableOpacity>
               {/* <TouchableOpacity>
                  <View style={{ top: 5, backgroundColor: 'grey', width: Dimensions.get('screen').width / 1.2, borderRadius: 20, padding: 10 }}>
                     <Text style={{ color: 'white' }}> Real Time Database</Text>
                  </View>
               </TouchableOpacity>
               <TouchableOpacity>
                  <View style={{ top: 10, backgroundColor: 'grey', width: Dimensions.get('screen').width / 1.2, borderRadius: 20, padding: 10 }}>
                     <Text style={{ color: 'white' }}> Firebase   Cloud</Text>
                  </View>
               </TouchableOpacity>
               <TouchableOpacity>
                  <View style={{ top: 15, backgroundColor: 'grey', width: Dimensions.get('screen').width / 1.2, borderRadius: 20, padding: 10 }}>
                     <Text style={{ color: 'white' }}> cloud Firestore</Text>
                  </View>
               </TouchableOpacity>
               <TouchableOpacity>
                  <View style={{ top: 15, backgroundColor: 'grey', width: Dimensions.get('screen').width / 1.2, borderRadius: 20, padding: 10 }}>
                     <Text style={{ color: 'white' }}> cloud Firestore</Text>
                  </View>
               </TouchableOpacity> */}


            </View>


         </ScrollView>

      )
   }

}