import { Text, TextInput, View, Dimensions, Image, TouchableOpacity, Alert, KeyboardAvoidingView, ScrollView, Platform } from 'react-native'
import React, { Component, useState } from 'react'
import firestore from '@react-native-firebase/firestore';
import { launchImageLibrary } from 'react-native-image-picker';


export default class FirestoreUpdatedata extends Component {
    constructor() {
        super();
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            address :'',
            imageuri :null
            //   isLoading: true
        };
    }

    componentDidMount() {
        //  firestore().collection('user').doc(this.props.route.params.user.id)
        //     // .get().then((res) => {
        //     //   if (res.exists) {
        //     //     const user = res.data();
        //     //     this.setState({
        //     //       key: res.id,
        //     //       name: user.name,
        //     //       email: user.email,
        //     //       mobile: user.mobile,
        //     //       isLoading: false
        //     //     });
        //     //   } else {
        //     //     console.log("Document does not exist!");
        //     //   }
        //     // });

        firestore().collection('user').doc(this.props.route.params.user.id).get().then((res) => {
            console.log("user id" +this.props.route.params.user.id)
            if (res.exists) {
                const user = res.data();
                console.log("data" + JSON.stringify(user, null, 2))
                this.setState({
                    key: res.id,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: user.email,
                    address: user.address,
                    imageuri :user.imageuri
                })
            }
            else {
                console.log("documents does not exits !")
            }
        })
    }
    inputValueUpdate = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }
    updateUser() {

        firestore().collection('user').doc(this.state.key).
        set({
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            address: this.state.address,
            imageuri:this.state.imageuri
        }).then((docRef) => {
            this.setState({
                key: '',
                firstname: '',
                lastname:'',
                email: '',
                address: '',
                imageuri:this.state.imageuri
                // isLoading: false,
            });
            console.log('data update')
              this.props.navigation.navigate('FirestoreDisplaydataClassComponent');
        })
            .catch((error) => {
                console.error("Error: ", error);
                this.setState({
                    isLoading: false,
                });
            });
    }
    render() {
        const UpdateImage = () => {
            let options = {
              storageOptions: {
                skipBackup: true,
                path: 'images',
              },
            };
           launchImageLibrary(options, (res) => {
              console.log('Response = ', res);
              if (res.didCancel) {
                console.log('User cancelled image picker');
              } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
              } else if (res.customButton) {
                console.log('User tapped custom button: ', res.customButton);
                alert(res.customButton);
              } else {
                 console.log('response111111', JSON.stringify(res.assets[0].uri));
                this.setState({
                  fileUri: res.assets[0].uri,
                  imageuri :res.assets[0].uri
                });
              }
            });
            
          }
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}>

                <View style={{ justifyContent: 'center', flex: 1 }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center', flexDirection: 'column' }}>
                        <TouchableOpacity onPress={() => {UpdateImage() }}>
                            <Image style={{ height: 100, width: 100, aspectRatio: 1.00, resizeMode: 'contain', alignSelf: 'center' }} source={{uri:this.state.imageuri}} />
                        </TouchableOpacity>
                        <Text style={{ fontWeight: 'bold', fontSize: 19, color: 'black', alignItems: 'flex-start', marginTop: 10 }}>Firestore Update</Text>

                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: 'grey', marginTop: 10, width: Dimensions.get('screen').width / 1.2, alignSelf: 'center' }}>
                            <Image style={{ tintColor: 'black', paddingHorizontal: 4, left: 5 }} source={require('../../../../assets/Images/person.png')} />
                            <TextInput value={this.state.firstname} placeholder='Enter the First name ' placeholderTextColor={'white'} style={{ flex: 1, left: 5 }} onChangeText={(val) => this.setState({firstname:val})} />

                        </View>
                        <View style={{ marginTop: 5, display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: 'grey', width: Dimensions.get('screen').width / 1.2, alignSelf: 'center' }}>
                            <Image style={{ left: 5, tintColor: 'black', paddingHorizontal: 4 }} source={require('../../../../assets/Images/person.png')} />
                            <TextInput value={this.state.lastname} onChangeText={(val) => this.setState({lastname:val})} placeholder='Enter the Last name ' placeholderTextColor={'white'} style={{ flex: 1, left: 5 }} />

                        </View>
                        <View style={{ marginTop: 5, display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: 'grey', width: Dimensions.get('screen').width / 1.2, alignSelf: 'center' }}>
                            <Image style={{ left: 5, tintColor: 'black', paddingHorizontal: 4 }} source={require('../../../../assets/Images/email.png')} />

                            <TextInput value={this.state.email} onChangeText={(val) => this.setState({email:val})} placeholder='Enter the Email ' placeholderTextColor={'white'} style={{ left: 5, flex: 1 }} />

                        </View>
                        <View style={{ marginTop: 5, display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: 'grey', width: Dimensions.get('screen').width / 1.2, alignSelf: 'center' }}>
                            <Image style={{ left: 5, tintColor: 'black', paddingHorizontal: 4, justifyContent: 'center' }} source={require('../../../../assets/Images/home.png')} />

                            <TextInput value={this.state.address} onChangeText={(val) => this.setState({address:val})} placeholder='Enter the Address ' placeholderTextColor={'white'} style={{ left: 5, flex: 1 }} />

                        </View>
                        <TouchableOpacity onPress={() => {
                            this.updateUser()


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
        )
    }
}