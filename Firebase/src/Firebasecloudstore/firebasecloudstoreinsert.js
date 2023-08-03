import { Text, TextInput, View, Dimensions, Image, TouchableOpacity, Alert, KeyboardAvoidingView, ScrollView, Platform } from 'react-native'
import React, { Component, useState } from 'react'
import firestore  from '@react-native-firebase/firestore';



export default class firebasecloudstoreinsert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            Address: '',

        }

    }
    render() {
        const { firstname, lastname, email, address } = this.state
      const  firestoredatbaseinsert =()=>{
       firestore().collection('user').doc(firstname).set({firstname:firstname})  
.then(()=>{
    console.log('set')
})
       }
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}>

                <View style={{ justifyContent: 'center', flex: 1 }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center', flexDirection: 'column' }}>
                        <TouchableOpacity onPress={() => { }}>
                            <Image style={{ height: 100, width: 100, aspectRatio: 1.00, resizeMode: 'contain', alignSelf: 'center' }} source={require('../../assets/Images/firebaselogo.png')} />
                        </TouchableOpacity>
                        <Text style={{ fontWeight: 'bold', fontSize: 19, color: 'black', alignItems: 'flex-start', marginTop: 10 }}>Firebase firebasestore </Text>

                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: 'grey', marginTop: 10, width: Dimensions.get('screen').width / 1.2, alignSelf: 'center' }}>
                            <Image style={{ tintColor: 'black', paddingHorizontal: 4, left: 5 }} source={require('../../assets/Images/person.png')} />
                            <TextInput placeholder='Enter the First name ' placeholderTextColor={'white'} style={{ flex: 1, left: 5 }} onChangeText={(username) => this.setState({ firstname: username })} />

                        </View>
                        <View style={{ marginTop: 5, display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: 'grey', width: Dimensions.get('screen').width / 1.2, alignSelf: 'center' }}>
                            <Image style={{ left: 5, tintColor: 'black', paddingHorizontal: 4 }} source={require('../../assets/Images/person.png')} />
                            <TextInput onChangeText={(userlastname) => this.setState({ lastname: userlastname })} placeholder='Enter the Last name ' placeholderTextColor={'white'} style={{ flex: 1, left: 5 }} />

                        </View>
                        <View style={{ marginTop: 5, display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: 'grey', width: Dimensions.get('screen').width / 1.2, alignSelf: 'center' }}>
                            <Image style={{ left: 5, tintColor: 'black', paddingHorizontal: 4 }} source={require('../../assets/Images/email.png')} />

                            <TextInput onChangeText={(useremail) => this.setState({ email: useremail })} placeholder='Enter the Email ' placeholderTextColor={'white'} style={{ left: 5, flex: 1 }} />

                        </View>
                        <View style={{ marginTop: 5, display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: 'grey', width: Dimensions.get('screen').width / 1.2, alignSelf: 'center' }}>
                            <Image style={{ left: 5, tintColor: 'black', paddingHorizontal: 4, justifyContent: 'center' }} source={require('../../assets/Images/home.png')} />

                            <TextInput onChangeText={(useraddress) => this.setState({ address: useraddress })} placeholder='Enter the Address ' placeholderTextColor={'white'} style={{ left: 5, flex: 1 }} />

                        </View>
                        <TouchableOpacity onPress={() => {
                firestoredatbaseinsert()

                        }}>
                            <View style={{ marginTop: 10, alignItems: 'center', backgroundColor: '#FFD700', padding: 10, borderRadius: 30 }}>
                                <Text style={{ color: 'black' }}>
                                    Insert Data
                                </Text>
                            </View>
                        </TouchableOpacity>



                    </View>
                </View>



            </KeyboardAvoidingView>
            /* <TouchableOpacity style={{ bottom: 5, position: 'absolute', alignSelf: 'center' }} onPress={() => this.props.navigation.navigate('Login')}>
                <View style={{ alignItems: 'center', bottom: 5, position: 'relative', alignSelf: 'center' }}>
                  <Text style={{ color: 'black' }}>Already  Register user ? Login now</Text>
      
                </View>
              </TouchableOpacity> */
        )
    }
}
